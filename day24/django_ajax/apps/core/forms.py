from django import forms
from .models import Image,Post


class ImageForm(forms.ModelForm):
    class Meta:
        model=Image
        fields=["img"]

class PostForm(forms.ModelForm):
    class Meta:
        model=Post
        fields=["title","content"]