from django.urls import path
from . import views

urlpatterns = [
  path('',views.index),
  path('home',views.home),
  path('create_project',views.create_project),
  path('delete_project',views.delete_project),
  path('view_project',views.view_project)
]