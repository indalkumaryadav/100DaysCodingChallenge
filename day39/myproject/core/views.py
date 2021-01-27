from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from .models import Employee
import json
from django.core.serializers import serialize
from django.views.generic import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .forms import CreateEmployeeForm
# def home_view(request):

#     emp=Employee.objects.all()
#     json_data=serialize('json',emp)
    
#     return HttpResponse(json_data,'application/json')

# class HomeView(View):
#     def get(self,request):
#         emp=Employee.objects.all()
#         json_data=serialize('json',emp)
#         return HttpResponse(json_data,"application/json")
    
#         return HttpResponse('hi')
    
#     def put(self,request,id):
#         try:
#             emp=Employee.objects.get(id=id)
#             if emp is None:
#                 emp.delete()
            
#         except Employee.DoesNotExist():
#             emp=None
#         return emp


import io
from .utils import is_json
@method_decorator(csrf_exempt,name='dispatch')
class EmployeeCRUD(View):

    def get(self,request,*args,**kwargs):
        data=request.body
        valid_json=is_json(data)
        if valid_json:
            p_data=json.loads(data)
            id=p_data.get('id',None)
            if id is not None:
                try:
                    emp=Employee.objects.get(id=id)
                    if emp is not None:
                        json_data=serialize('json',[emp,])
                        return HttpResponse(json_data,status=200)
                except Employee.DoesNotExist:
                    error=json.dumps({'msg':"Not Available"})
                    return HttpResponse(error,status=404)
                    
                    
        emp= Employee.objects.all()
        sr_data=serialize('json',emp)
        return HttpResponse(sr_data,content_type='application/json',status=200)

    def post(self,request):
        emp=request.body

        json_to_dict=json.loads(emp)

        emp_form=CreateEmployeeForm(json_to_dict)

        if emp_form.is_valid():
            emp_form.save()
            json_data=json.dumps({"msg":'successfully Created!'})
            return HttpResponse(json_data,status=200)
        if emp_form.errors:
            return HttpResponse(json.dumps(emp_form.errors),status=404)
        
    

    def put(self,request,*args,**kwargs):
        data=request.body
        valid_json=is_json(data)
        if valid_json:
            p_data=json.loads(data)
            id=p_data.get('id')
            try:
                emp=Employee.objects.get(id=id)
                if emp is None:
                    json_data=json.dumps({'msg':'Provided Details not match with anyone'})
                else:
                    emp_data={
                        'id':emp.id,
                        'name':emp.name,
                        'age':emp.age,
                        'salery':emp.salery
                    }
                    emp_data.update(p_data)
                    form=CreateEmployeeForm(emp_data,instance=emp)
                    if form.is_valid():
                        form.save()
                        return HttpResponse(json.dumps({'msg':'Successfully Updated Data!'}),status=200)

            except Employee.DoesNotExist:
                return HttpResponse(json.dumps({'msg':'Employee Not Exist'}),status=404)
            
            
            


    def delete(self,request,*args,**kwargs):
        data=request.body
        valid_json=is_json(data)

        if valid_json:
            p_data=json.loads(data)
            id=p_data.get('id')
            emp=Employee.objects.get(id=id)
            if emp is not None:
                emp.delete()
                return HttpResponse(json.dumps({'msg':'successfully Deleted!'}),content_type="application/json",status=200)
        return HttpResponse(json.dumps({'msg':'To perform Deletion id is must be provied'}),status=404)


        
                    
    
            
        
        
        