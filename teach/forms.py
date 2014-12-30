# coding=utf-8
#Date:2014/12/29
#Email:wangjian2254@gmail.com
from django.forms import ModelForm
from django import forms
from teach.models import SubjectTemplate, Subject

__author__ = u'王健'


class SubjectTemplateForm(ModelForm):
    image = forms.FileField(required=False)
    html = forms.CharField(widget=forms.Textarea,required=False)
    script = forms.CharField(widget=forms.Textarea,required=False)
    style = forms.CharField(widget=forms.Textarea,required=False)
    class Meta:
        model = SubjectTemplate
        fields = ('name', 'html', 'image', 'script', 'style')


class SubjectForm(ModelForm):
    class Meta:
        model = Subject
        fields = ('name', 'json', 'js', 'data')