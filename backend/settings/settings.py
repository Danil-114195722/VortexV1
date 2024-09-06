import logging
from os import getenv

from pathlib import Path
from dotenv import load_dotenv


load_dotenv()


# путь к проекту
BASEDIR = Path(__file__).parent.parent

# настройки почты из .env файла
MAIL_FROM = getenv('MAIL_FROM')
MAIL_TO_LIST = [elem.strip() for elem in getenv('MAIL_TO_LIST').split(',')]
MAIL_PASSWORD = getenv('MAIL_PASSWORD')

# настройка логирования
logger = logging.getLogger('fast-api-server')
logging.basicConfig(
    level=logging.INFO,
    filename=f'{BASEDIR}/logs/views_logs.log',
    format='%(levelname)s: [%(asctime)s] ("%(module)s", line %(lineno)s) -- %(message)s',
)
