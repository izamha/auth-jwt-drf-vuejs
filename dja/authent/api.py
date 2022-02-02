from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import AccessToken
from .serializers import UserSerializer

class UserAPIView(generics.RetrieveAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = UserSerializer


    def get(self, request, format=None):
        token_user_email = request.user.email
        token_user_name = request.user.username

        return Response({
            'username': token_user_name,
            'email': token_user_email,
        })