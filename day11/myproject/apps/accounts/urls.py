from django.urls import path,include
from . import views
from django.views.generic import RedirectView

urlpatterns = [
    path('login/',views.UserLogin.as_view(),name="login" ),

    path('',RedirectView.as_view(url="login/") ),

]
