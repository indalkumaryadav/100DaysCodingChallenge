from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.JsonData.as_view(),name="home"),
]
