from datetime import datetime

from .post_models import PostForm


def format_mail(body: PostForm) -> str:
    # перевод названия услуги из условного в полное
    match body.service:
        case "log":
            service_title = "Услуга: Международная логистика\n"
        case "customs":
            service_title = "Услуга: Таможенное оформление\n"
        case "cert":
            service_title = "Услуга: Сертификация\n"
        case None:
            service_title = ""
        case _:
            service_title = f"Услуга: Неизвестная услуга ({body.service})\n"

    message_part = f"Сообщение:\n{body.message}\n\n" if body.message else ""

    # составление текста письма
    text = f"""Новая заявка с сайта.\n
Имя: {body.name}
Номер телефона: {body.phone}
{service_title}
{message_part}
Дата и время подачи заявки: {datetime.strftime(datetime.now(), "%d.%m.%Y, %H:%M:%S")}."""

    return text
