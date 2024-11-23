from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name='home'),
    path("tracker/add_expense", views.add_expense, name='add_expense')
]