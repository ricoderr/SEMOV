from django.db import models
from django.conf import settings
from django.contrib.auth.models import User, AbstractUser

class CustomUserModel(AbstractUser): 
    email = models.EmailField(unique=True)

class FavMovies(models.Model): 
    movie_id = models.BigIntegerField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    