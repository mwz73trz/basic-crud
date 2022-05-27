from django import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register('peoples', PeopleViewSet, basename='people')

urlpatterns = [
    path('', include(router.urls)),
]