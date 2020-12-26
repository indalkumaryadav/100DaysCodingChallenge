from django.urls import path
from django.urls.conf import include
from rest_framework import routers
from .views import BookViewSet
from django.views.generic import RedirectView

router=routers.DefaultRouter()

router.register("book",BookViewSet)

urlpatterns = [
    path('api/',include(router.urls)),

    path("",RedirectView.as_view(url="api/book/"))
]
