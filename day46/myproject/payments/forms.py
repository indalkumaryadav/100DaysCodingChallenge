from django import forms

class UserRegisterForm(forms.Form):
    name=forms.CharField(max_length=100)
    marks=forms.IntegerField()