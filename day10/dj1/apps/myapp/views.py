from .models import Post
from django.shortcuts import render
from .forms import PostForm

# Create your views here.

def home_view(request):
    post=Post.objects.all()
    form=PostForm()
    context={
        "form":form,
        "post":post,
    }
    return render(request,"myapp/home.html",context)