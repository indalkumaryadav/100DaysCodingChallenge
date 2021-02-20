from django.contrib import admin
from .models import Post


class PostAdmin(admin.ModelAdmin):
    search_fields=["title","body"]
    list_display=["title","author","slug","body","publish","create_at","updated_at","status"]
    prepopulated_fields={
        'slug':("title",)
    }
    list_filter=("status","publish","author","create_at","updated_at")
    raw_id_fields=("author",)
    date_hierarchy="publish"
    ordering=["status","publish"]
    

admin.site.register(Post,PostAdmin)