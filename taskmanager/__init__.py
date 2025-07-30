import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
if os.path.exists("env.py"):
    import env  # noqa

print("Flask:---", Flask)

app = Flask(__name__)
print("__name__", __name__)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DB_URL")

print("app:---", app)

db = SQLAlchemy(app)
print("db", db)
from taskmanager import routes  # noqa