

from django.urls import path

from . import views
urlpatterns = [
    path('',views.index, name='index'),
    path('about/', views.about, name='about'),
    path('about/<str:about_var>', views.about_more, name='about-more'),
    path('contact/', views.contact, name='contact'),
    path('services/', views.services, name='services'),
    path('services/<slug:slug>', views.service, name='services-detail'),
    path('special/<slug:slug>', views.sp_service, name='services-special'),
    path('gallery/', views.gallery, name='gallery'),
]
