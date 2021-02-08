from django.shortcuts import render
from django.core.mail import send_mail
from .forms import SendMail
from django.http import HttpResponse

def home_view(request):
    if request.method == 'POST':
        form=SendMail(request.POST)
       
        if form.is_valid():
            subject=form.cleaned_data["subject"]
            email=form.cleaned_data["to"]
            message=form.cleaned_data["message"]
            url=request.build_absolute_uri()
            print(url)
            send_mail(subject,message+"\n"+url,"admin@gmail.com",[email])
            return HttpResponse("successfully Send Email")
    else:
        form=SendMail()
    context={
        'form':form,
    }

    return render(request,"core/home.html",context)
