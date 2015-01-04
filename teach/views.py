# coding=utf-8
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, render_to_response

# Create your views here.
from teach.forms import SubjectTemplateForm, SubjectForm
from teach.models import SubjectTemplate, Subject

@login_required
def template_list(request):
    tlist = SubjectTemplate.objects.all().order_by('-id')
    return render_to_response('templatelist.html', {'tlist':tlist, 'request': request})
@login_required
def add_template(request):
    id = request.REQUEST.get('id', '')
    if id:
        temp = SubjectTemplate.objects.get(pk=id)
    else:
        temp = SubjectTemplate()
    return render_to_response('templateedit.html', {'s':temp, 'request': request})

@login_required
def save_template(request):
    pk = request.POST.get('id', '')
    if pk:
        uf = SubjectTemplateForm(request.POST, request.FILES, instance=SubjectTemplate.objects.get(pk=pk))
    else:
        uf = SubjectTemplateForm(request.POST, request.FILES)
    if not uf.is_valid():
       return HttpResponse(u'提交的数据不正确，请通过后退按钮返回修改数据再提交。')

    if not uf.instance.user:
        uf.instance.user = request.user
    uf.instance.save()
    for s in Subject.objects.filter(template=uf.instance):
        s.is_right = None
        s.save()
    return render_to_response('templateedit.html', {'s':uf.instance,'msg':u'保存成功', 'request': request})


@login_required
def subject_list(request):
    id = request.REQUEST.get('id')
    temp = SubjectTemplate.objects.get(pk=id)
    tlist = Subject.objects.filter(template_id=id).order_by('-id')
    return render_to_response('subjectlist.html', {'tlist':tlist, 't':temp, 'request': request})

@login_required
def add_subject(request):
    tid = request.REQUEST.get('tid')
    temp = SubjectTemplate.objects.get(pk=tid)
    id = request.REQUEST.get('id', '')
    if id:
        s = Subject.objects.get(pk=id)
    else:
        s = Subject()
    return render_to_response('subjectedit.html', {'s':s, 't':temp, 'request': request})

@login_required
def save_subject(request):
    pk = request.POST.get('id', '')
    if pk:
        uf = SubjectForm(request.POST,instance=Subject.objects.get(pk=pk))
    else:
        uf = SubjectForm(request.POST)
    if not uf.is_valid():
       return HttpResponse(u'提交的数据不正确，请通过后退按钮返回修改数据再提交。')
    uf.instance.template_id = request.POST.get('templateid')
    if not uf.instance.user:
        uf.instance.user = request.user
    uf.instance.is_right = None
    uf.instance.save()
    return render_to_response('subjectedit.html', {'s':uf.instance,'t':uf.instance.template,'msg':u'保存成功', 'request': request})

@login_required
def look_view(request):
    sid = request.REQUEST.get('sid')
    subject = Subject.objects.get(pk=sid)
    template = subject.template
    return render_to_response('view.html', {'subject':subject,'template':template, 'request': request})


@login_required
def check_subject(request):
    if not request.user.is_staff:
        return HttpResponse(u'您不是管理员')
    sid = request.REQUEST.get('sid')
    do = request.REQUEST.get('do', '0')
    subject = Subject.objects.get(pk=sid)
    if do == '0':
        subject.is_right = False
    else:
        subject.is_right = True
    subject.checker = request.user
    subject.save()

    return HttpResponseRedirect('/teach/subject_list?id=%s'%subject.template_id)


@login_required
def unchecker_subject_list(request):

    tlist = Subject.objects.exclude(is_right=True).order_by('id')
    if request.REQUEST.get('user'):
        tlist = tlist.filter(user=request.user)
    return render_to_response('subjectlist.html', {'tlist':tlist, 'request': request})