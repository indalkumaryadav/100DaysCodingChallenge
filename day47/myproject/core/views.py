from django.shortcuts import render
from .forms import UserRegistrationForm
# Create your views here.


def home_view(request):

    if request.method=="POST":
        form=UserRegistrationForm(request.POST)
        if form.is_valid():
            print("form Submitted!")
    else:
        form=UserRegistrationForm()
    context={
        'form':form,
        "data":"indalkumaryadav"
    }
    return render(request,"core/base.html",context)