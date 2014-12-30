# coding=utf-8
from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class SubjectTemplate(models.Model):
    name = models.CharField(max_length=30, verbose_name=u'模板名称')
    script = models.TextField(verbose_name=u'模板脚本', null=True, blank=True)
    style = models.TextField(verbose_name=u'模板样式', null=True, blank=True)
    html = models.TextField(verbose_name=u'模板html', null=True, blank=True)
    image = models.ImageField(upload_to='img', verbose_name=u'模板图片', null=True, blank=True)
    user = models.ForeignKey(User, null=True, blank=True, verbose_name=u'设计人')


class Subject(models.Model):
    name = models.CharField(max_length=100, verbose_name=u'题目名称')
    json = models.TextField(verbose_name=u'json 答案')
    js = models.TextField(verbose_name=u'自定义js校验函数')
    data = models.TextField(verbose_name=u'预制json答案')
    template = models.ForeignKey(SubjectTemplate, null=True, blank=True, verbose_name=u'模板')
    user = models.ForeignKey(User, null=True, blank=True, related_name='author_user', verbose_name=u'设计人')
    is_right = models.NullBooleanField(default=None, verbose_name=u'审核通过',
                                       help_text=u'None 待审核，False 审核不通过，True 审核通过，template 发生修改则，每一题都需要重新审核')
    checker = models.ForeignKey(User, null=True, blank=True, related_name='checker_user', verbose_name=u'审核者')