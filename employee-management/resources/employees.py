from flask import request
from flask_restful import Resource
from flask_jwt_extended import  jwt_required, get_jwt_identity
from model import Employee,db


class EmployeeList(Resource):
    @jwt_required()
    def get(self):
        employee=Employee.query.all()
        return [{'id': emp.id, 'name': emp.name, 'department': emp.department,  'position': emp.position, 'salary': emp.salary} for emp in employee], 200
    @jwt_required()
    def  post(self):
        data=request.get_json()
        new_employee=Employee(**data)
        db.session.add(new_employee)
        db.session.commit()
        return {'message':'Employee Added Successfully'},201
    
class EmployeeDetails(Resource):
    @jwt_required()
    def get(self,employee_id):
        employee = Employee.query.get_or_404(employee_id)
        return {
            'id': employee.id,
            'name': employee.name,
            'department': employee.department,
            'position': employee.position,
            'salary': employee.salary  # Fixed typo here
        }, 200
    
    @jwt_required
    def put(self,employee_id):
        data=request.get_json()
        employee=Employee.query.get_or_404(employee_id)
        employee.name=data['name']
        employee.department=data['department']
        employee.position=data['position']
        employee.salary=data['salary']
        db.session.commit()
        return {'message': 'Employee Updated Successfully'},200
    
    @jwt_required()
    def delete(self,employee_id):
        employee=Employee.query.get_or_404(employee_id)
        db.session.delete(employee)
        db.session.commit()
        return {'message': 'Employee Deleted Successful'},200
        
    
    
        



        