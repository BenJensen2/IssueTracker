from django.urls import path
from . import views

urlpatterns = [
  path('',views.index),
  path('home',views.home),
  path('create_project',views.create_project)
]