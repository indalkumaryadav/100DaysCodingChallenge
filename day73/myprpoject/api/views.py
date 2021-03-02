from django.shortcuts import render
from .models import Todo
from .serializers import TodoSerializer
from rest_framework.generics import ListAPIView


class ListAPI(ListAPIView):
    queryset=Todo.objects.all()
    serializer_class=TodoSerializer
