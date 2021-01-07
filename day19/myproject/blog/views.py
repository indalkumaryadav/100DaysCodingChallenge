from django.shortcuts import render
from rest_framework import viewsets
from .models import Post
from django.http import HttpResponse
from .serializers import PostSerializer

# Create your views here.
class PostViewset(viewsets.ModelViewSet):
    serializer_class=PostSerializer
    queryset=Post.objects.all()
    