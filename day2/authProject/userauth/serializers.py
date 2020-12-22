from django.db import models
from rest_framework import fields, serializers 
from .models import MyUser, Todo
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=MyUser
        fields=['first_name','last_name','email','password']


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Todo
        fields=['name']