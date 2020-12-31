from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("apps.core.urls")),
    # path('user/', include("apps.accounts.urls")),
    # path('profile/', include("apps.user_profile.urls")),
    # path('dashboard/', include("apps.dashboard.urls")),
]
