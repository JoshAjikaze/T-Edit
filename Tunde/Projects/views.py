from django.shortcuts import render
from .models import *

# Create your views here.
def Home(request):
    projects = Projects.objects.all()
    context = {
        'projects':projects,
    }
    return render(request, 'index.html', context)
