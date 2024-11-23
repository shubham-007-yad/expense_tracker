from django.shortcuts import HttpResponse, render
 
__expenses = list()
# Create your views here.
def home(request):
    return render(request, 'index.html')

def add_expense(request):
    print(request)
    return HttpResponse("Data Successfully inserted")