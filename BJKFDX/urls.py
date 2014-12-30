from django.conf.urls import patterns, include, url
from django.contrib.auth.views import login, logout
from django.contrib import admin
from django.conf.urls.static import static
from BJKFDX import settings
from teach.views import template_list

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'teach.views.template_list'),
    url(r'^teach/', include('teach.urls')),
    (r'^accounts/login/$', login, {'template_name': 'login.html'}),
   (r'^accounts/logout/$', logout, {'template_name': 'login.html'}),
   (r'^accounts/profile/$', template_list),

    url(r'^admin/', include(admin.site.urls)),
)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
