from django.db import models

def upload_path(instance,filename):
    return '/'.join(['covers',str(instance.title),filename])


class Post(models.Model):
    title=models.CharField(max_length=100)
    image=models.ImageField(upload_to=upload_path,blank=True,null=True)