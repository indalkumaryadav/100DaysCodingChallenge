from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.
class Post(models.Model):
    title=models.CharField(max_length=255)
    body=RichTextField(blank=True,null=True);
    