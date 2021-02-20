from django.contrib import admin
from .models import MyUser,Todo


@admin.register(MyUser)
class UserAdmin(admin.ModelAdmin):
    list_display=['email','first_name','last_name','password']
    

@admin.register(Todo)
class UserTodo(admin.ModelAdmin):
    list_display=['name']