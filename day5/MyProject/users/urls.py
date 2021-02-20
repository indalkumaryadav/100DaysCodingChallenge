from django.urls import path,include
from .views  import UserLogin

urlpatterns = [
    path('login/',UserLogin.as_view(),name="login"),
]
