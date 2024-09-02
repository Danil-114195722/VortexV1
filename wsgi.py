import sys


# путь к проекту
sys.path.append('/home/g/grigulyaya/api_vortex_spb_su/public_html')

# путь к фреймворку
sys.path.append('/home/g/grigulyaya/api_vortex_spb_su')

# путь к виртуальному окружению
sys.path.append('/home/g/grigulyaya/api_vortex_spb_su/public_html/venv/lib/python3.12/site-packages/')


from a2wsgi import ASGIMiddleware
from main import app


# для запуска ASGI через WSGI
application = ASGIMiddleware(app)
