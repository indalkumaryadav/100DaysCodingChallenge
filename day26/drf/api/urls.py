from django.urls import path,include
from .views import UserViewset,PostViewset
from rest_framework import routers

router=routers.DefaultRouter()
router.register("users",UserViewset,basename="user")
router.register("posts",PostViewset,basename="post")

urlpatterns = [
    path('api/', include(router.urls)),
]
