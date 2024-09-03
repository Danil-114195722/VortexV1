import smtplib
import aiosmtplib

from settings.settings import logger
from settings.config import MAIL_PASSWORD, MAIL_FROM, MAIL_TO_LIST


# Асинхронная отправка письма через google
async def async_send_mail_google(subject: str, text: str) -> bool:
    mail_body = "\n".join((f"From: {MAIL_FROM}",
                           f"To: {', '.join(MAIL_TO_LIST)}",
                           f"Subject: {subject}",
                           f"{text}"))

    logger.info("Start send mail...")
    mail_body = mail_body.encode()  # для русских букв

    server = aiosmtplib.SMTP(
        username=MAIL_FROM,
        password=MAIL_PASSWORD,
        hostname="smtp.gmail.com",
        port=465,
        timeout=5.0,
        use_tls=True
    )
    try:
        await server.connect()
        await server.sendmail(MAIL_FROM, MAIL_TO_LIST, mail_body)

        logger.info("Mail sent successfully!")
        return True

    except Exception as error:
        logger.critical(f'Sending mail failed: "{error}"')
        return False

    finally:
        await server.quit()


# Отправка письма через google
def send_mail_google(subject: str, text: str) -> bool:
    mail_body = "\n".join((f"From: {MAIL_FROM}",
                           f"To: {', '.join(MAIL_TO_LIST)}",
                           f"Subject: {subject}",
                           f"{text}"))

    logger.info("Start send mail...")
    mail_body = mail_body.encode()  # для русских букв

    server = smtplib.SMTP_SSL(host='smtp.gmail.com', port=465, timeout=5.0)
    try:
        server.login(user=MAIL_FROM, password=MAIL_PASSWORD)
        server.sendmail(from_addr=MAIL_FROM, to_addrs=MAIL_TO_LIST, msg=mail_body)

        logger.info("Mail sent successfully!")
        return True

    except Exception as error:
        logger.critical(f'Sending mail failed: "{error}"')
        return False

    finally:
        server.quit()


# Асинхронная отправка письма через свой сервер
async def async_send_mail_vortex(subject: str, text: str) -> bool:
    mail_body = "\n".join((f"From: {MAIL_FROM}",
                           f"To: {', '.join(MAIL_TO_LIST)}",
                           f"Subject: {subject}",
                           f"{text}"))

    logger.info("Start send mail...")
    mail_body = mail_body.encode()  # для русских букв

    server = aiosmtplib.SMTP(
        username=MAIL_FROM,
        password=MAIL_PASSWORD,
        hostname="smtp.spaceweb.ru",
        port=25,
        timeout=5.0,
    )
    try:
        await server.connect()
        await server.sendmail(MAIL_FROM, MAIL_TO_LIST, mail_body)

        logger.info("Mail sent successfully!")
        return True

    except Exception as error:
        logger.critical(f'Sending mail failed: "{error}"')
        return False

    finally:
        await server.quit()


# if __name__ == '__main__':
#     import asyncio
#
#     mail_subject = "Проверка API!!!"
#     mail_text = f'''Здесь должен быть длинный текст с результатом формы с сайта'''
#
#     send_mail(subject=mail_subject, text=mail_text)
#     asyncio.run(async_send_mail(subject=mail_subject, text=mail_text))
