from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class LoginAPIView(APIView): 

    def post(self, request): 
        email = request.data.get("email")
        password = request.data.get("password")
        
        user = authenticate(request, username=email, password=password)
        if user: 
            login(request, user)
            return Response({"message": "LoggedIn successfully!"}, status=status.HTTP_200_OK)
        else: 
            return Response({"message": "Invalid Credentials!"}, status=status.HTTP_401_UNAUTHORIZED)