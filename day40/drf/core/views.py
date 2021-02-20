from django.shortcuts import render
from .serailizers import EmployeeSerializer
from .models import Employee
from django.views.generic import View
import io
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse

class EmployeeView(View):

    def get(self,request,*args,**kwargs):
        json_data=request.body
        print(json_data)
        stream=io.BytesIO(json_data)
        python_data=JSONParser().parse(stream)
        id=python_data.get('id',None)
        if id is not None:
            emp=Employee.objects.get(id=id)
            emp_ser=EmployeeSerializer(emp)
            emp_json=JSONRenderer().render(emp_ser.data)
            return HttpResponse(emp_json,content_type="application/json",status=200)

        emp_data=Employee.objects.all()
        emp_serializer=EmployeeSerializer(emp_data,many=True)
        data=JSONRenderer().render(emp_serializer.data)
        return HttpResponse(data,content_type="application/json",status=200)
    
    def post(self,request,*args,**kwargs):
        data=request.body
        # converting json data into python data SERIALIZATION
        stream=io.BytesIO(data)
        python_data=JSONParser().parse(stream)
        print(python_data)
        
        # DeSerialization
        serializer=EmployeeSerializer(data=python_data)
        if serializer.is_valid():
            serializer.save()
            json_data=JSONRenderer().render({'msg':'Created Successfully!'})
            return HttpResponse(json_data,content_type="application/json",status=200)
        json_data=JSONRenderer().render(serializer.errors)
        return HttpResponse(json_data,content_type="application/json",status=400)
    
    def put(self,request,*args,**kwargs):
        json_data=request.body
        stream=io.BytesIO(json_data)
        python_data=JSONParser().parse(stream)

        id=python_data.get('id')
        emp=Employee.objects.get(id=id)
        serialize=EmployeeSerializer(data=emp,partial=True)
        if serialize.is_valid():
            serialize.save()
            json_data=JSONRenderer().render({"msg":'Successfully Updated!'})
            return HttpResponse(json_data,content_type="application/json",status=200)
        json_data=JSONRenderer().render(serialize.errors)
        return HttpResponse(json_data,content_type="application/json",status=400)
        
        