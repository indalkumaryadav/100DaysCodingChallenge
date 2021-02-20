
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from userauth import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
router=routers.DefaultRouter()

router.register("user",views.UserViewSet,basename="user")
router.register("todos",views.TodoViewSet,basename="todos")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(router.urls) ),


    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
