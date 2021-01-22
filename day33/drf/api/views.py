from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PostSerializer
from .models import Post
from rest_framework.views import APIView
# Create your views here.

class PostViewSet(APIView):
    def get(self, request, format=None):
        usernames = Post.objects.all()
        return Response(usernames)