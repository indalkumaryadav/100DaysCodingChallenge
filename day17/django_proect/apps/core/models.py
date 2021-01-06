from django.db import models
from django.db import models
from tinymce.models import HTMLField
from ckeditor.fields import RichTextField

# Create your models here.

class Post(models.Model):
    title=models.CharField(max_length=100)
    content = HTMLField()
    description=RichTextField()