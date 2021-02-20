from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import UserSerializer,PostSerializer
from .models import Post
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import  BasicAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
class UserViewset(viewsets.ModelViewSet):
    serializer_class=UserSerializer
    queryset=User.objects.all()

class PostViewset(viewsets.ModelViewSet):
    serializer_class=PostSerializer
    queryset=Post.objects.all()
    authentication_classes=[JWTAuthentication]
    permission_classes=[IsAuthenticated]