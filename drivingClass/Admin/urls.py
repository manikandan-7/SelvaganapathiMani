from django.urls import  path
from . import views
urlpatterns = [
    path("",views.home,name="home"),
    path("add/",views.add,name="classadd"),
    path('view/',views.classview,name="classview"),
    path('view/<int:classid>',views.Bookclass,name="bookclass")
]