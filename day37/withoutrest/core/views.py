from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.views.generic import View
from .forms import CreatePostForm
from .models import Post
import json

class JsonData(View):

    def get(self,request):
        post=Post.objects.all()
        return HttpResponse(content_type="application/json",status=200)

    def post(self,request):
        form=CreatePostForm()

        if form.is_valid():
            form.save()
        else:
            json_data=json.dumps(form.errors)
        return HttpResponse(content_type="application/json")
  