from django.urls import path
from . import views

urlpatterns = [
    path('', views.Calculator2View.as_view(), name='calculator2')

]
