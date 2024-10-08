import ssl
import smtplib
import aiosmtplib

import codecs

from settings.settings import logger
# from settings.config import MAIL_PASSWORD, MAIL_FROM, MAIL_TO_LIST


MAIL_FROM = 'ejyou.user@gmail.com'
MAIL_PASSWORD = 'dpyssmcsagmptxzj'
MAIL_TO_LIST = ['ejyou.user@gmail.com', 'info@vortex.spb.su']


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
    mail_body = mail_body.encode()  # перекодировка в utf-8 (для кириллицы)
    # mail_body = mail_body.encode("koi8_r")  # перекодировка в koi-8 (для кириллицы)

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

    ctx = ssl.create_default_context()
    ctx.set_ciphers('DEFAULT')

    server = aiosmtplib.SMTP(
        username=MAIL_FROM,
        password=MAIL_PASSWORD,
        hostname="smtp.spaceweb.ru",
        port=587,
        timeout=10.0,
        start_tls=True,
        tls_context=ctx
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
#     # import asyncio
#
#     mail_subject = "Check API!!!"
#     mail_text = f'''Здесь должен быть длинный текст с результатом формы с сайта'''
#
#     send_mail_google(subject=mail_subject, text=mail_text)
#     # asyncio.run(async_send_mail_google(subject=mail_subject, text=mail_text))
