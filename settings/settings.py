import logging
from pathlib import Path


# путь к проекту
BASEDIR = Path(__file__).parent.parent

# настройка логирования
logger = logging.getLogger('fast-api-server')
logging.basicConfig(
    level=logging.INFO,
    filename=f'{BASEDIR}/logs/views_logs.log',
    format='%(levelname)s: [%(asctime)s] ("%(module)s", line %(lineno)s) -- %(message)s',
)
