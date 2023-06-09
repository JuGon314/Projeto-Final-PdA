from django.urls import path
from app_website import views

urlpatterns = [
    path('', views.index, name='home'),
    path('integrantes/', views.integrantes, name='integrantes'),
    path('historia/', views.história, name='historia'),
    path('discografia/', views.discografia, name='discografia'),
]