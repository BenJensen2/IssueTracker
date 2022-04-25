from django.shortcuts import render, HttpResponse, redirect
from .models import *

def index(request):
  return HttpResponse('Captain, we have liftoff')

def home(request):
  context = {
    'projects': Project.objects.all()
  }
  print(context['projects'])
  print("Hello")
  return render(request, 'home.html',context)

def create_project(request):
  project_title = request.POST['title']
  project_description = request.POST['description']
  Project.objects.create(title = project_title, description = project_description)
  return redirect('../home')