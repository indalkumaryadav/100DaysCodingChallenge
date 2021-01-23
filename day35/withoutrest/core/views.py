from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def emp_data_view(request):
    emp_data={
        'id':1,
        'name':'Indal Kumar',
        'age':23,
    }
    res=f'<h2>Name {emp_data["name"]}</h2>,Age {emp_data["age"]}'
    return HttpResponse(res)
