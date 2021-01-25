from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.views.generic import View
from .forms import CreatePostForm
from .models import Post
import json
from django.core.serializers import serialize
from django.http import JsonResponse

class JsonData(View):

    def get(self,request):
        post=Post.objects.all()
        json_data=serialize('json',[post,])
        print(json_data)
        return JsonResponse(json_data)

    def post(self,request):
        data=request.body
        valid_json=is_json(data)
        form=CreatePostForm()
        if form.is_valid():
            form.save()
            json_data=json.dumps({'msg':"Successfully Created!"})
        else:
            json_data=json.dumps(form.errors)
        return HttpResponse(content_type="application/json")
  