from rest_framework import serializers
from .models import FavMovies
from django.contrib.auth import get_user_model

User = get_user_model()



class FavMoviesSerializer(serializers.Serializer): 
    class Meta:
        model = FavMovies
        fields = "__all__"
        
        
