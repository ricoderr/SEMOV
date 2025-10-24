from rest_framework import serializers
from .models import FavMovies

class FavMoviesSerializer(serializers.Serializer): 
    class Meta:
        model = FavMovies
        fields = "__all__"