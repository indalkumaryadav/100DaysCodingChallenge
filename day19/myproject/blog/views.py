from django.shortcuts import render
from rest_framework import viewsets
from .models import Post
from django.http import HttpResponse
from .serializers import PostSerializer
from django.http import HttpResponse

# Create your views here.
class PostViewset(viewsets.ModelViewSet):
    serializer_class=PostSerializer
    queryset=Post.objects.all()

    def post(self,request,*args,**kwargs):
        title=request.get['title']
        image=request.get['image']
        Post.objects.create(title=title,image=image)
        return HttpResponse({"message":"Successfully Created !"})
    