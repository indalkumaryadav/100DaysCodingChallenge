from django.urls import path
from .views import test_payment

urlpatterns = [
    path('',test_payment,name="payments"),
]
