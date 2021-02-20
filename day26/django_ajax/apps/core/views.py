from django.shortcuts import render
from .forms import CreatePostForm
from .models import Post
from django.http import JsonResponse


def home(request):
    date={
        'mydata':'indal',
    }
    post=Post.objects.all()
    context={
        'data':post
    }
    return render(request,'core/home.html',context),JsonResponse(date)

