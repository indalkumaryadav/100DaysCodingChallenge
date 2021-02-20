from django.urls import path,include
from .views import ProductAPI
from rest_framework import routers

router=routers.DefaultRouter()
router.register("product",ProductAPI,basename="product_api")

urlpatterns = [
    path('', include(router.urls)),
]
