from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
class Post(models.Model):
    STATUS_CHOICE=(("draft","Draft"),("published","Published"))
    title=models.CharField(max_length=256)
    slug=models.SlugField(max_length=256,unique_for_date="publish")
    author=models.ForeignKey(User,on_delete=models.CASCADE, related_name="blog_posts")
    body=models.TextField()
    publish=models.DateTimeField(default=timezone.now)
    create_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    status=models.CharField(max_length=10,choices=STATUS_CHOICE,default="draft")

    class Meta:
        ordering = ("-publish",)
    
    def __str__(self):
        return self.title
