from django import forms
from .models import Employee

class CreateEmployeeForm(forms.ModelForm):
    def clean(self):
        cleaned_data=super().clean()
        inputname=cleaned_data['name']
        if inputname=='hello':
            raise forms.ValidationError('The Name Is Not be Save')
    class Meta:
        model=Employee
        fields='__all__'