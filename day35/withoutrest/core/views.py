from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import View
from django.utils.decorators import method_decorator

# # Create your views here.
# @csrf_exempt
# def emp_data_view(request):
#     emp_data={
#         'id':1,
#         'name':'Indal Kumar',
#         'age':23,
#     }
#     if request.method=="POST":
#         id = request.POST.get('id')
#         name=request.POST.get('name')
#         age=request.POST.get('age')
#         print(id,name,age)
#     # json_data=json.dumps(emp_data)
#     # res=f'<h2>Name {emp_data["name"]}</h2>,Age {emp_data["age"]}'
#     return JsonResponse(emp_data)

from .models import Employee
class JsonView(View):
    def get(self,request,*args,**kwargs):
        emp = Employee.objects.get(id=1)
        emp_data={
            'name':emp.title,
            'body':emp.body
        }
        json_data=json.dumps(emp_data)
        
        return HttpResponse(json_data,content_type="application/json")