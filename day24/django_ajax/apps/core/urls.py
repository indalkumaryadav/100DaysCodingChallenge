from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.home_view,name="home" ),
    path('post/',views.post_view,name="post" ),
]