from django.db import models

# Create your models here.

class Classname (models.Model):
    name=models.CharField(max_length=30)
    weekday=models.BooleanField()
    days=models.BigIntegerField()
    instructor=models.CharField(max_length=30)

    def __str__(self):
        return "%s %s"%(self.name,self.days)
class Classlist (models.Model):
    price=models.BigIntegerField()
    slot=models.IntegerField()
    date=models.DateField()
    cartype=models.BooleanField()
    classname=models.ForeignKey(Classname,on_delete=models.CASCADE)

    def __str__(self):
        return self.price
    class Meta:
        ordering=["price"]

class Bookdetails (models.Model):
    name=models.CharField(max_length=30)
    phone=models.IntegerField()
    cartype=models.BooleanField()
    classlist=models.ForeignKey(Classlist,on_delete=models.CASCADE)

    def __str__(self):
        return self.name
class Coupon(models.Model):
    coupon=models.CharField(max_length=20)
    offervalue=models.IntegerField()
    offertype=models.CharField(max_length=20)