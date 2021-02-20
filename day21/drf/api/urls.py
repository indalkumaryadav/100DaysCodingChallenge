from django.urls import path,include
from rest_framework import routers
from .views import PostViewsets

router=routers.DefaultRouter()

router.register("posts",PostViewsets,basename="post")

urlpatterns = [
    path('', include(router.urls)),
]
