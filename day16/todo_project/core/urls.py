from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from .views import TodoViewset
router =routers.DefaultRouter()

router.register("todos",TodoViewset,basename="todo")

urlpatterns = [
    path('',include(router.urls)),
]
