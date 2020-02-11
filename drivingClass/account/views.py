from django.shortcuts import render,redirect
from django.contrib.auth.models import User,auth
from django.contrib import messages
# Create your views here.

def signup(request):
    
    if(request.method=="POST"):
        try:
            user= User.objects.create_user(username=request.POST['name'],email=request.POST['email'],password=request.POST['password'])
            user.save()
            print('create')
            return redirect('/login')
        except:
            messages.info(request,"unsuccess")
            return redirect('/signup')
        
    else:
        return render(request,"signup.html")


def login(request):

    if(request.method=="POST"):
        try:
            print(request.POST['name'])
            user=auth.authenticate(username=request.POST['name'],password=request.POST['password'])
            print(user)
            if user is not None:
                auth.login(request,user)
                return redirect('/')
            else:
                messages.info(request,"authenticate fail")
                return redirect('/login')
        except:
            messages.info(request,"unsuccess")
            return redirect('/login')
    else:
        return render(request,"login.html")

def logout(request):
    auth.logout(request)
    return redirect('/')