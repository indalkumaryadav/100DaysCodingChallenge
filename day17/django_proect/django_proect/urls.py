from django.contrib import admin
from django.urls import path,include
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("apps.core.urls")),
    path('user/', include("apps.accounts.urls")),

    path('dashboard/', include("apps.dashboard.urls")),
    path('user/profile/', include("apps.user_profile.urls")),
    path('produts/', include("apps.products.urls")),
    path('carts/', include("apps.carts.urls")),

    path('api/', include("apps.core.api.urls")),
    path('tinymce/', include('tinymce.urls')),
    path('ckeditor/', include('ckeditor_uploader.urls')),
]
