from django.db import models

# Create your models here.
class Employee(models.Model):
    name=models.CharField(max_length=100)
    age=models.IntegerField()
    salery=models.IntegerField()
    image=models.ImageField(upload_to='images/')

    # def __str__(self):
    #     return self.name
