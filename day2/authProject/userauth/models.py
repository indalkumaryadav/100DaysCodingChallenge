from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, AbstractUser,PermissionsMixin
# Create your models here.

class UserManager(BaseUserManager):
        def create_user(self, email, password, **extra_fields):
            if not email:
                raise ValueError(_('The Email must be set'))
            email = self.normalize_email(email)
            user = self.model(email=email, **extra_fields)
            user.set_password(password)
            user.save()
            return user

        def create_superuser(self, email, password, **extra_fields):
            extra_fields.setdefault('is_staff', True)
            extra_fields.setdefault('is_superuser', True)
            extra_fields.setdefault('is_active', True)

            if extra_fields.get('is_staff') is not True:
                raise ValueError(_('Superuser must have is_staff=True.'))
            if extra_fields.get('is_superuser') is not True:
                raise ValueError(_('Superuser must have is_superuser=True.'))
            return self.create_user(email, password, **extra_fields)



class MyUser(AbstractUser):
    username=None
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)
    date_joined=models.DateTimeField(auto_now_add=True)
    email=models.EmailField(unique=True)
    password=models.CharField(max_length=50)
    is_staff=models.BooleanField(default=False)
    is_active=models.BooleanField(default=True)
    is_superuser=models.BooleanField(default=False)

    USERNAME_FIELD="email"
    REQUIRED_FIELDS=[]
    objects=UserManager()






class Todo(models.Model):
    name=models.CharField(max_length=100)