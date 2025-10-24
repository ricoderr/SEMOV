from django.db import models
from django.contrib.auth.models import User

class FavMovies(models.Model): 
    movie_id = models.BigIntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    