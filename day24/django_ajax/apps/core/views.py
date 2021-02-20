from django.shortcuts import render
from .forms import ImageForm,PostForm
from .models import Post
from django.http import JsonResponse

# Create your views here.
def home_view(request):
    form=ImageForm
    context={
        'form':form
    }
    return render(request,"core/home.html",context)

def post_view(request):
    if request.method=="POST":
        form=PostForm(request.POST)
        if form.is_valid():
            form.save()
            
    else:
        form=PostForm
    
    post=Post.objects.all()
    
    context={
        'post':post,
        'form':form
    }
    return render(request,'core/post.html',context)