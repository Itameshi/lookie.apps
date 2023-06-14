from django.urls import path

from . import views, apis

app_name = 'json_api'

urlpatterns = [
        path('api/tasks', apis.api.as_view(), name='api'),
        #path('api/tasks', apis.test(), name='test'),
        ]
