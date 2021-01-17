from django import forms
from .models import Post,Person
from django_summernote.widgets import SummernoteWidget, SummernoteInplaceWidget
from ckeditor.widgets import CKEditorWidget
from ckeditor_uploader.widgets import CKEditorUploadingWidget

class FormFromSomeModel(forms.ModelForm):
    class Meta:
        model = Person
        fields=['name']
        widgets={
            'name':SummernoteWidget()
        }
       

class CreatePostForm(forms.ModelForm):
    class Meta:
        model=Post
        fields=['image','title','description']
        widgets={
            'description':CKEditorUploadingWidget()
        }
        