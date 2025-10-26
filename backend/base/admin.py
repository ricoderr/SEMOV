from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUserModel

@admin.register(CustomUserModel)
class CustomUserAdmin(UserAdmin):
    pass