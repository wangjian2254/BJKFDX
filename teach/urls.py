#coding=utf-8
'''
Created on 2011-3-19

@author: 王健
'''
from django.conf.urls import patterns
from teach.views import add_template, template_list, save_template, save_subject, add_subject, look_view, subject_list


urlpatterns = patterns('^teach/',
                       (r'^add_template',add_template),
                       (r'^save_template',save_template),
                       (r'^template_list',template_list),

                       (r'^add_subject',add_subject),
                       (r'^save_subject',save_subject),
                       (r'^subject_list',subject_list),
                       (r'^look_view',look_view),



                       )