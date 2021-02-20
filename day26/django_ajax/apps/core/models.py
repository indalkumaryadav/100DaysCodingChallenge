from django.db import models


class Post(models.Model):
    image=models.ImageField(upload_to="images/")
    title=models.CharField(max_length=100)
    description=models.TextField()



