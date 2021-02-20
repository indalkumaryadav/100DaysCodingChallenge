from rest_framework import viewsets
from apps.core.models import Post
from .serializers import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset=Post.objects.all()
    serializer_class=PostSerializer
