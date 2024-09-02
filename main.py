from datetime import datetime

from fastapi import FastAPI
from fastapi.responses import JSONResponse

from services.post_models import PostForm
from services.send_mail import async_send_mail


app = FastAPI(openapi_url=None, docs_url=None, redoc_url=None)


@app.get("/")
async def index():
    return "Hello from FastAPI Backend!"


@app.post("/send_mail")
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
Услуга: {body.service}\n
Сообщение:
{body.message}\n
Дата и время подачи заявки: {datetime.strftime(datetime.now(), "%d.%m.%Y, %H:%M:%S")}.
"""

    # отправка письма
    is_ok = await async_send_mail(subject="Новая заявка с сайта!", text=text)

    if is_ok:
        return {"status": "ok"}
    else:
        return JSONResponse(content={"status": "error"}, status_code=500)


if __name__ == '__main__':
    import uvicorn

    # запуск бэка через uvicorn
    uvicorn.run("main:app", reload=True, log_level="debug")
