from django.shortcuts import render
from django.contrib.auth import get_user_model, authenticate, login
from django.db import  IntegrityError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


User = get_user_model()
class LoginAPIView(APIView): 
    def post(self, request): 
        email = request.data.get("email")
        password = request.data.get("password")
        print(email, password)
        
        user = authenticate(request, username=email, password=password)
        if user: 
            login(request, user)
            return Response({"message": "LoggedIn successfully!"}, status=status.HTTP_200_OK)
        else: 
            return Response({"message": "Invalid Credentials!"}, status=status.HTTP_401_UNAUTHORIZED)
        
        
class SignupAPIView(APIView): 
    def post(self,  request): 
        username = request.data.get("username")
        email = request.data.get("email")
        password = request.data.get("password")
        
        try: 
            User.objects.create_user(username=username, email=email, password=password)
            return Response({"message": "User created successfully!"}, status=status.HTTP_201_CREATED)
        except IntegrityError as e: 
            return Response({"message": "User already exists with this email!"}, status=status.HTTP_400_BAD_REQUEST)