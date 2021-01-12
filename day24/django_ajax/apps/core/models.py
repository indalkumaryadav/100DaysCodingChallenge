from django.db import models

# Create your models here.


class Image(models.Model):
    img=models.ImageField(upload_to="images/")

class Post(models.Model):
    title=models.CharField(max_length=100)
    content=models.TextField();
    