from django.urls import path,include
from rest_framework import routers
from .views import PostViewset
from django.views.generic import RedirectView

router=routers.DefaultRouter()
router.register("posts",PostViewset,basename="post")

urlpatterns = [
    path('api/',include(router.urls)),
    path('',RedirectView.as_view(url="api/")),
    
]
