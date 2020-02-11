from django import forms
from .models import Classlist

class Classlistview(forms.ModelForm):
    class Meta:
        model=Classlist
        fields='__all__'