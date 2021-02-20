from django import forms
from django.core import validators

def email_validation(value):
    pass


class UserRegistrationForm(forms.Form):
    name=forms.CharField()
    age=forms.IntegerField()
    message=forms.CharField(widget=forms.Textarea,validators=[
        validators.MinLengthValidator(10)
    ])
    bot_handler=forms.CharField(widget=forms.HiddenInput)
    def clean(self):
        cleaned_data = super().clean()
        iname = cleaned_data["name"]

        if len(iname)<5:
            raise forms.ValidationError("name 5 above charecter")

    # def clean(self):
    #     inputname=self.cleaned_data["name"]
    #     if len(inputname)<5:
    #         raise forms.ValidationError("name should be more then 5 charecter")