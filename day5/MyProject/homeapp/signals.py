from django.contrib.auth.signals import user_logged_in, user_logged_out, user_login_failed

from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import pre_save, pre_delete, pre_init, post_save, post_delete, post_init
from django.core.signals import request_started, request_finished, got_request_exception


from .models import UserProfile

@receiver(user_logged_in, sender=User)
def login_success(sender, request, user, **kwargs):
    print('-----------------')
    print("Run intro")
    print("Sender", sender)
    print('User', user)
    print('request', request)
    print('User', request)
    print(f'Kwargs:{kwargs}')


# user_logged_in.connect(login_success, sender=User)

@receiver(user_logged_out, sender=User)
def user_logout(sender, request, user, **kwargs):
    print("user logout")


@receiver(user_login_failed)
def login_failed(sender, credentials, request, **kwargs):
    print('Login Falied Signals called')
    print('Credentials', credentials)


@receiver(pre_save, sender=User)
def at_begening_save(sender, instance, **kwargs):
    print('-----------------')
    print('pre save signal')
    print('Sender', sender)
    print('instance', instance)
    print('kwargs', kwargs)

# pre_save.connect(at_begening_save,sender=User)


@receiver(post_save, sender=User)
def at_begening_save(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instances)
    else:
        print('Post save signal')
        print('updated')
        print('Sender', sender)
        print('instance', instance)
        print(created)
        print('kwargs', kwargs)


@receiver(pre_delete, sender=User)
def pre_delete(sender, instance, **kwargs):
    print('__________________')
    print('pre delete')
    print('Sender', sender)
    print('instance', instance)
    print('kwargs', kwargs)


@receiver(post_delete, sender=User)
def post_delete(sender, instance, **kwargs):
    print('post delete signal')
    print('Sender', sender)
    print('instance', instance)
    print('kwargs', kwargs)


@receiver(pre_init, sender=User)
def pre_init_begening(sender, *args, **kwargs):
    print('init-------------')
    print('begening')
    print('Sender', sender)
    print(args)
    print(kwargs)


@receiver(post_init, sender=User)
def post_init_begening(sender, *args, **kwargs):
    print('init-------------')
    print('post init')
    print('Sender', sender)
    print(args)
    print(kwargs)


@receiver(request_started)
def req(sender, environ, **kwargs):
    print('at begening request')
    print('Sender', sender)
    print('Environment', environ)
    print(kwargs)


@receiver(request_finished)
def req_fin(sender, **kwargs):
    print('at request finish')
    print('Sender', sender)
    print(kwargs)


@receiver(got_request_exception)
def req_fin(sender, request, **kwargs):
    print('at request finish')
    print('Sender', sender)
    print('Enviroment', request)
    print(kwargs)
