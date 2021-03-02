from django.urls import path,include
from .views import ListAPI

urlpatterns = [
    path("",ListAPI.as_view(),name="listapi")
   
]
