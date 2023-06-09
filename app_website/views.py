from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def integrantes(request):
    return render(request, 'integrantes.html')

def história(request):
    return render(request, 'historia.html')

def discografia(request):
    return render(request, 'discografia.html')