from pydantic import BaseModel


# форма с данными от юзера
class PostForm(BaseModel):
    name: str
    phone: str
    service: str
    message: str
