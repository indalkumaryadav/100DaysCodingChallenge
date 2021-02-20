from django.urls import path,include
from .views import EmployeeAPIView,EmployeeCreateAPIView,EmployeeRetrieveAPIView,EmployeeUpdateAPIView,EmployeeDestroyAPIView,EmployeeListCreateAPIView,EmployeeRetrieveUpdateAPIView,EmployeeRetrieveUpdateDestroyAPIView,EmployeeRetrieveDestroyAPIView,EmployeeListMixin

urlpatterns = [
    path('',EmployeeAPIView.as_view()),
    path('<str:ename>/',EmployeeRetrieveAPIView.as_view()),
    path('update/<int:pk>/',EmployeeUpdateAPIView.as_view()),
    path('delete/<int:pk>/',EmployeeDestroyAPIView.as_view()),
    path('create/employee/',EmployeeCreateAPIView.as_view()),
    path('list/create/',EmployeeListCreateAPIView.as_view()),
    path('retrieve/update/<int:pk>/',EmployeeRetrieveUpdateAPIView.as_view()),
    path('retrieve/delete/<int:pk>/',EmployeeRetrieveDestroyAPIView.as_view()),
    path('list/create/<int:pk>/',EmployeeRetrieveUpdateDestroyAPIView.as_view()),
    
    path('list/mixins/',EmployeeListMixin.as_view()),
]