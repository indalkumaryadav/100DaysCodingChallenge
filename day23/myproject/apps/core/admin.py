from django.contrib import admin
from .models import Post,Grade,Course,Person

# Register your models here.
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display=['title']

admin.site.register(Person)
admin.site.register(Grade)
admin.site.register(Course)