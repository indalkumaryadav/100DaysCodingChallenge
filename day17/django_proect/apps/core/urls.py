from django.urls import path
from . import views
from .models import Post

urlpatterns = [
    path('',views.home_view,name='home' ),
]
