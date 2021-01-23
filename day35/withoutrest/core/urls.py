from django.urls import path
from . import views

urlpatterns = [
    path('', views.emp_data_view),
]