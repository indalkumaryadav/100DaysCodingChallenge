from django.shortcuts import render
from .forms import CreatePostForm,FormFromSomeModel
from .models import Post,Person
from django.http import JsonResponse,HttpResponse
from django.forms.models import model_to_dict
from django.core import serializers

def home(request):
    if request.method=='POST':
        myform=FormFromSomeModel(request.POST)
        if myform.is_valid():
            myform.save()
            return HttpResponse("Successfully Uploaded")

    if request.is_ajax():
        form=CreatePostForm(request.POST,request.FILES)
        if form.is_valid():
            instance=form.save()
            ser_instance = serializers.serialize('json', [ instance, ])
            return JsonResponse({'instance':ser_instance}, status=200)
        else:
            return JsonResponse({'msg':"error"},safe=False)

       
    else:
        myform=FormFromSomeModel()
        form=CreatePostForm()
        post=Post.objects.all()

    post=Post.objects.all()
    
    context={
        'data':post,
        'form':form,
        'myform':myform,
        'person':Person.objects.all()
    }
    return render(request,'core/home.html',context)

