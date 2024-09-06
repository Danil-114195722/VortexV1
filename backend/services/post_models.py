from pydantic import BaseModel


# форма с данными от юзера
class PostForm(BaseModel):
    name: str
    phone: str
    email: str | None = None
    service: str | None = None
    message: str | None = None
