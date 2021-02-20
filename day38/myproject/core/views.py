from django.shortcuts import render
from django.http import HttpResponse
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
@method_decorator(csrf_exempt,name='dispatch')
class HomeView(View):
    def get(self,request):
        emp=Employee.objects.all()
        json_data=serialize('json',emp)
        return HttpResponse(json_data,"application/json")
    def post(self,request):
        emp=request.body

        json_to_dict=json.loads(emp)

        emp_form=CreateEmployeeForm(json_to_dict)
        if emp_form.is_valid():
            emp_form.save()
            json_data=json.dumps({"msg":'successfully Created!'})
            return HttpResponse(json_data,'application/json')
        if emp_form.errors:
            return HttpResponse(json.dumps({"msg":'not be save data hello'}),'application/json')
            
        return HttpResponse('hi')
    
    def put(self,request,id):
        try:
            emp=Employee.objects.get(id=id)
            if emp is None:
                emp.delete()
            

        except Employee.DoesNotExist():
            emp=None
        return emp