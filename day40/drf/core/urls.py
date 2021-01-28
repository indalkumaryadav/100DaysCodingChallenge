from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.EmployeeView.as_view(),name="employee"),
]
