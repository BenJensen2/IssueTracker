from django.shortcuts import render, HttpResponse

def index(request):
  return HttpResponse('Captain, we have liftoff')
