from rest_framework import serializers
from apps.core.models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Post
        fields=['title']