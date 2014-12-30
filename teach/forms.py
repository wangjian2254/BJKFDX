# coding=utf-8
#Date:2014/12/29
#Email:wangjian2254@gmail.com
from django.forms import forms, ModelForm
from teach.models import SubjectTemplate, Subject

__author__ = u'王健'


class SubjectTemplateForm(ModelForm):
    image = forms.FileField(required=False)
    image_look = forms.FileField(required=False)
    class Meta:
        model = SubjectTemplate
        fields = ('name', 'html', 'image', 'image_look', 'script', 'style')


class SubjectForm(ModelForm):
    class Meta:
        model = Subject
        fields = ('name', 'json', 'js', 'data')