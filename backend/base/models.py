from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from random import randint


class CustomUserModel(AbstractUser): 
    email = models.EmailField(unique=True)
    
    def __str__(self): 
        return self.username 

class FavMovies(models.Model): 
    movie_id = models.BigIntegerField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    
    
def generate_otp(): 
    return randint(1000, 9999)
    
class ValidatingUser(models.Model):
    email = models.EmailField(unique=True) 
    otp = models.BigIntegerField(unique=True, default=generate_otp)
    
    def __str__(self): 
        return self.email
    