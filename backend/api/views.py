from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import Student
from .serializers import StudentSerializer 

class StudentList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

