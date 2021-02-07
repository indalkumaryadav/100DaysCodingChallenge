from django.contrib import admin
from .models import Student,Student1,Teacher,Teacher1
# Register your models here.

admin.site.register(Student)
admin.site.register(Student1)
admin.site.register(Teacher)
admin.site.register(Teacher1)
# admin.site.register(ProxyModel)