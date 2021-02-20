from django.shortcuts import render
from .models import MyUser, Todo
from .serializers import TodoSerializer, UserSerializer
from rest_framework import serializers, viewsets
from rest_framework_simplejwt.authentication import authentication
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth.models import User

# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    serializer_class=UserSerializer
    queryset=MyUser.objects.all()
    # permission_classes=[IsAuthenticated]



class TodoViewSet(viewsets.ModelViewSet):
    serializer_class=TodoSerializer
    queryset=Todo.objects.all()
    permission_classes=[IsAuthenticated]