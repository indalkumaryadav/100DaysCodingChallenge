from django.shortcuts import render
from .forms import PostForm

# Create your views here.
def home_view(request):
    form=PostForm()
    context={
        'form':form
    }
    return render(request,'core/home.html',context)