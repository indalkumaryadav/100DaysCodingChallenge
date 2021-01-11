from django.shortcuts import render,redirect
from .models import Post
from .forms import PostCreateForm
# Create your views here.
def home_view(request):
    if request.method=="POST":
        form=PostCreateForm(request.POST)
        if form.is_valid():
            form.save()
            # return redirect("/")
    else:
        form=PostCreateForm

    context={
        'form':form
    }
    return render(request,'core/home.html',context)