from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserProfile (models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name="user_profile")
    title=models.CharField(max_length=100)
