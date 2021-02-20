from django.urls import path
from . import views

urlpatterns = [
    path("pay/",views.payment_view),
    path('payment/success/', views.handle_payment_success)

]
