# Vortex

## Python Backend

### File `settings/config.py` must contain this data:

```python
# e-mail settings
MAIL_FROM = 'your.email.from@domain.com'
MAIL_TO_LIST = ['your.email.to1@domain.com', 'your.email.to2@domain.com']
MAIL_PASSWORD = 'password_for_email_from'
```

> __!!! Attention__
>
> _On hosting need to create venv_

```shell
# Executable python: /home/g/grigulyaya/.local/bin/python3.12

# install virtualenv
/home/g/grigulyaya/.local/bin/python3.12 -m pip install virtualenv
# create venv
/home/g/grigulyaya/.local/bin/python3.12 -m virtualenv venv
# activate venv
source venv/bin/activate
```


### Important notes:
1) On hosting front send request to `https://api.vortex.spb.su/wsgi.py/send_mail/`