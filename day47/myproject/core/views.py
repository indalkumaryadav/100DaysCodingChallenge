from django.shortcuts import render
from .forms import UserRegistrationForm
# Create your views here.


def home_view(request):
    form=UserRegistrationForm()
    context={
        'form':form
    }
    if request.method=="POST":
        form=UserRegistrationForm(request.POST)
        if form.is_valid():
            print("form Submitted!")
    return render(request,"core/base.html",context)