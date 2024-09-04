# Отправка письма с данными формы


### _URL:_

```text
http://api.vortex.spb.su/send_mail/
```

### _Метод:_ POST

<hr>

### _Пример отправки запроса:_

> body 👇 (JSON)

```json5
{
  // Имя клиента
  "name": "string",
  // Телефон клиента
  "phone": "string",
  // Почта клиента
  "email": "string",
  // Название услуги
  "service": "string",
  // Сообщение
  "message": "string"
}
```

<hr>

### _Пример ответа сервера (JSON):_

#### Успех (status code: 200)

```json5
{
    "status": "ok"
}
```

#### Ошибка (status code: 500)

```json5
{
    "status": "error"
}
```

<hr>
