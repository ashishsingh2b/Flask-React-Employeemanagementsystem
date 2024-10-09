from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id= db.Column(db.Integer,primary_key=True)
    username= db.Column(db.String(80),unique=True,nullable=False)
    password = db.Column(db.String,nullable=False)

class Employee(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(90),nullable=False)
    department=db.Column(db.String(90))
    position=db.Column(db.String(90))
    salary  =db.Column(db.Float)