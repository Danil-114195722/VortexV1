import argparse
from datetime import datetime

import uvicorn
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from yaml import safe_load as yaml_safe_load

from services.post_models import PostForm
from services.send_mail import send_mail
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


@api_app.post("/send_mail")
async def send_mail_resource(body: PostForm):
    """
    Отправка сообщения на почту с данными из формы
    :param body: форма с фронта
    :return: результат отправки письма
    """

    # составление текста письма
    text = f"""Новая заявка с сайта.\n
Имя: {body.name}
Номер телефона: {body.phone}
Услуга: {body.service}
Сообщение:
{body.message}\n
Дата и время подачи заявки: {datetime.strftime(datetime.now(), "%d.%m.%Y, %H:%M:%S")}.
"""

    # отправка письма
    is_ok = send_mail(subject="Новая заявка с сайта!", text=text)

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
