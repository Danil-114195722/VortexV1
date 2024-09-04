from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from services.post_models import PostForm
from services.format_mail import format_mail
from services.send_mail import async_send_mail_vortex


app = FastAPI(openapi_url=None, docs_url=None, redoc_url=None)

# middleware с добавлением заголовков для CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://vortex.spb.su", "https://vortex.spb.su"],
    allow_credentials=False,
    allow_methods=["POST"],
    allow_headers=["*"],
)


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

    # форматирование текста письма
    text = format_mail(body=body)

    # отправка письма
    is_ok = await async_send_mail_vortex(subject="Новая заявка с сайта!", text=text)
    # is_ok = True

    if is_ok:
        return {"status": "ok"}
    else:
        return JSONResponse(content={"status": "error"}, status_code=500)
