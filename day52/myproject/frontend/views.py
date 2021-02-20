from django.shortcuts import render
import json

# Create your views here.
def home_view(request):
    data={
        'name':'indal kumar',
        'age':22,
        'address':'patna bihar'
    }
    json_data=json.dumps(data)
    context={
        'data':json_data
    }
    return render(request,"frontend/index.html",context)