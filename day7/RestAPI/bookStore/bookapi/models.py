from django.db import models

# Create your models here.

class Book(models.Model):
    title=models.CharField(max_length=255)
    author=models.CharField(max_length=255)
    price=models.IntegerField()
    rating=models.FloatField()
    book_img=models.ImageField(upload_to="books")
