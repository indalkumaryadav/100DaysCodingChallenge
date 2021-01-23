from django.urls import path,include
from rest_framework import routers
from . import views
from .views import PostViewSet

router=routers.DefaultRouter()
router.register("posts",PostViewSet,basename="post")

urlpatterns = [
    path('',include(router.urls)),
]
