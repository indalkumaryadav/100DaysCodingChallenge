
from django.contrib import admin
from django.urls import path
from .views import UserAPIView

urlpatterns = [
    path('user/register/',UserAPIView.as_view()),
]
