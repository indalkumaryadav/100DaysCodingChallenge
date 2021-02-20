from django.contrib import admin
from .models import Post
from django_summernote.admin import SummernoteModelAdmin
from .models import Person

admin.site.register(Post)

class SummerNoteAdmin(SummernoteModelAdmin):
    summernote_fields = '__all__'
admin.site.register(Person,SummerNoteAdmin)

