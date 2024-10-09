from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from model import db
from flask_cors import CORS
from resources.auth import UserLogin,UserRegister
from resources.employees import EmployeeDetails,EmployeeList
from flask_jwt_extended import  JWTManager
from flask_restful import Api


app= Flask(__name__)
api=Api(app)
app.config.from_object('config.Config')

db.init_app(app)
JWTManager(app)
CORS(app)


#api endpoints
api.add_resource(UserRegister, '/register')
api.add_resource(UserLogin,'/login')
api.add_resource(EmployeeList,'/employees')
api.add_resource(EmployeeDetails,'/employees/<int:employee_id>')


with app.app_context():
    db.create_all()


if __name__=='__main__':
    app.run(debug=True)  # run the app in debug mode

