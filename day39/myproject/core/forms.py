from django import forms
from .models import Employee

class CreateEmployeeForm(forms.ModelForm):
    def clean(self):
        # cleaned_data=super().clean()
        inputname=self.cleaned_data['name']
        inputsalery=self.cleaned_data['salery']
        if inputsalery<5000:
            raise forms.ValidationError({'salery':'Salery must grater then 5000'})
    class Meta:
        model=Employee
        fields='__all__'