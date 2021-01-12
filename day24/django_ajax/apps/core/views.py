from django.shortcuts import render
from .forms import ImageForm

# Create your views here.
def home_view(request):
    form=ImageForm
    context={
        'form':form
    }
    return render(request,"core/home.html",context)