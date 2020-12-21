
from django.contrib import admin
from django.db.models import base
from django.urls import path,include
from authapi import views
from rest_framework import routers

router =routers.DefaultRouter()
router.register("user",views.UserViewSet,basename="users")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
