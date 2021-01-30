from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.models import User
from rest_framework.authentication import BaseAuthentication


class CustomAuthentication(BaseAuthentication):

    def authenticate(self,request):
        username=request.GET.get("username")

        if username is  None:
            return None
        try:
            user=User.objects.get(username=username)
        except User.DoesNotExist:
            raise AuthenticationFailed("You Must provide credentials detials")
        return (user,None)