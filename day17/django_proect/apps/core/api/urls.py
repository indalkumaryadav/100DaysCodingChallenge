from django.urls import path,include
from rest_framework import routers
from apps.core.api.views import PostViewSet

router=routers.DefaultRouter()

router.register("posts",PostViewSet,basename="post")

urlpatterns = [
    path('',include(router.urls)),
]
