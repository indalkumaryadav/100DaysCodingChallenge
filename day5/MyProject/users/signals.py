from django.contrib.auth.models import User
from django.contrib.auth.signals import user_logged_in
from django.db.models.signals import post_save
from .models import UserProfile
from django.dispatch import receiver


def create_profile(sender,request, instance,  user,**kwargs):
	print(request)

user_logged_in.connect(create_profile,sender=User)