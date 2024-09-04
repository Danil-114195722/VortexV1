import argparse

import uvicorn
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from yaml import safe_load as yaml_safe_load

from services.post_models import PostForm
from services.send_mail import async_send_mail_vortex
from services.format_mail import format_mail
from settings.settings import BASEDIR


# парсинг аргумента запуска бэка в dev или prod режиме
parser = argparse.ArgumentParser(description="Backend part on FastAPI for Vortex app")
parser.add_argument("mode", type=str, choices=("dev", "prod"), help="Start app in DEV or PROD mode")
args = parser.parse_args()

# в соответствии с режимом определяем настройки бэка
if args.mode == "prod":
    app = FastAPI(openapi_url=None, docs_url=None, redoc_url=None)
    api_app = FastAPI(openapi_url=None, docs_url=None, redoc_url=None)
else:
    app = FastAPI(openapi_url=None, docs_url=None, redoc_url=None)
    api_app = FastAPI(redoc_url=None, docs_url="/")

    # настройка Swagger документации
    with open(f'{BASEDIR}/docs/swagger_docs.yml') as yaml_swagger_docs:
        # Чтение YAML-файла
        custom_openapi = yaml_safe_load(yaml_swagger_docs)
        # Заменяем стандартную OpenAPI схему на свою
        api_app.openapi = lambda: custom_openapi

# middleware с добавлением заголовков для CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://vortex.spb.su", "https://vortex.spb.su"],
    allow_credentials=False,
    allow_methods=["POST"],
    allow_headers=["*"],
)


@api_app.post("/send_mail")
async def send_mail_resource(body: PostForm):
    """
    Отправка сообщения на почту с данными из формы
    :param body: форма с фронта
    :return: результат отправки письма
    """

    # форматирование текста письма
    text = format_mail(body=body)

    # отправка письма
    is_ok = await async_send_mail_vortex(subject="Новая заявка с сайта!", text=text)
    # is_ok = True

    if is_ok:
        return {"status": "ok"}
    else:
        return JSONResponse(content={"status": "error"}, status_code=500)


# для создания префикса /api для всего бэка
app.mount("/api", api_app)


if __name__ == '__main__':
    # запуск бэка через uvicorn
    print(f"Starting backend part in {args.mode} mode...")
    if args.mode == "prod":
        uvicorn.run("main:app", host="0.0.0.0", port=8080, log_level="info")
    else:
        uvicorn.run("main:app", reload=True, log_level="debug")
