FROM python:3.11

RUN apt update -y && apt upgrade -y
RUN pip install --upgrade pip
RUN pip install django==4.2
RUN pip install djangorestframework==3.14.0

WORKDIR /opt/django_backend
RUN django-admin startproject backend_api_server
WORKDIR /opt/django_backend/backend_api_server
RUN python manage.py startapp json_api
RUN python manage.py makemigrations
RUN python manage.py migrate

#RUN python manage.py runserver 0:8000
