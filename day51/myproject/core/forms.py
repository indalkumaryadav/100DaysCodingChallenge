from django import forms

class SendMail(forms.Form):
    subject=forms.CharField()
    to=forms.EmailField()
    message=forms.CharField()