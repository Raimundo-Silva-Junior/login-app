from django.apps import AppConfig
from django.core.signals import setting_changed


class ApiConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "api"
