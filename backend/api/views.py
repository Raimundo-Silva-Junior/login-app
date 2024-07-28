from django.contrib.auth.models import User
from .serializers import RegisterSerializer
from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

class RegisterView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer
