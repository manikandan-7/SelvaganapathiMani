from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import Classlist,Classname,Bookdetails,Coupon
from .forms import Classlistview
from django.core import serializers
# Create your views here.
def home(request):
    return render(request,'home.html',{'positon':1})

def add(request):
    if request.method=='POST':
        addclass=Classname(name=request.POST['classname'],days=request.POST['day'],instructor=request.POST['gender'],weekday=request.POST['weekend'])
        addclass.save()
        addclasslist=Classlist(price=request.POST['price'],slot=request.POST['slot'],cartype=request.POST['cartype'],date=request.POST['date'],classname_id=addclass.id)
        addclasslist.save()
        print('inserted')
        

    return render(request,'classadd.html',{'position':4})

def classview(request):
    data=Classlist.objects.all()
    return render(request,'classview.html',{'data':data,'position':2})

def Bookclass(request,classid):
    if request.method=='POST':
        book=Bookdetails(name=request.POST['name'],phone=request.POST['phone'],classlist_id=classid,cartype=request.POST['cartype'])
        book.save()
        print(request.POST)
        return redirect('/',{'position':1})

    else:
        classlist=Classlist.objects.get(id=classid)
        coupon=list(Coupon.objects.all())
        
        content={
            'data':classlist,
            'coupon':serializers.serialize('json',coupon)
        }
        return render(request,'bookclass.html',content)
