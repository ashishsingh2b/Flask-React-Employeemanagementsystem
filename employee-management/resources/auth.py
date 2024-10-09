from flask import request
from flask_restful import Resource
from flask_jwt_extended import create_access_token,jwt_required,get_jwt_identity
from werkzeug.security import check_password_hash,generate_password_hash
from model import db,User

class UserRegister(Resource):
    def post(self):
        data=request.get_json()

        #check user fields
        if 'username' not in data or  'password' not in data:
            return {'message':'Username and Password Are required'},400
        
        #check user already exist

        if User.query.filter_by(username=data['username']).first():
            return {'message':'Username already esists'},400



        hashed_password=generate_password_hash(data['password'])
        new_user=User(username=data['username'],password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        return {'message':'User Created Successfull'},201
    
class UserLogin(Resource):
    def post(self):
        data=request.get_json()

        if 'username' not in data and 'password' not in data:
            return {'message': 'Please  provide both username and password'},400


        user=User.query.filter_by(username=data['username']).first()
        if user and check_password_hash(user.password,data['password']):
            access_token=create_access_token(identity=user.id)
            return {'access_token':access_token},201
        return {'message':'Invalid Credentials'},401
    
    