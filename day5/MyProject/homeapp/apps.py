from django.apps import AppConfig


class HomeappConfig(AppConfig):
    name = 'homeapp'

    def ready(self):
        import homeapp.signals
