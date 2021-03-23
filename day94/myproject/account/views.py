from django.shortcuts import render
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class UserAPIView(APIView):
    
    def post(self,request):
        serializers =UserSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response({"message":f"user is created for '{serializers.data['username']}' ","data":serializers.data})
        return Response({"message":"A user with that username already exists! Try Anather Username"})