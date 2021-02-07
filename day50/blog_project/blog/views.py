from django.shortcuts import render,get_object_or_404
from .models import Post

# Create your views here.

def home_view(request):
    context = {
        "post_list":Post.objects.all()
    }
    return render(request, 'blog/home.html',context)