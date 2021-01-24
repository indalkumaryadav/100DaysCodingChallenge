from django.urls import path
from . import views

urlpatterns = [
    path('', views.JsonView.as_view()),
]