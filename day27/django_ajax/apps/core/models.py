from django.db import models
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField

class Post(models.Model):
    image=models.ImageField(upload_to="images/%Y-%m-%d")
    title=models.CharField(max_length=100)
    description=RichTextUploadingField()


class Person(models.Model):
    name=models.TextField()


