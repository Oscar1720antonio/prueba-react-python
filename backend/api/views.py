from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import Student
from .serializers import StudentSerializer 
######################### ESTA ES LA VISTA DE TODOS LOS FORMULARIOS
class StudentList(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

######################### ESTA ES LA VISTA DETALLADA DE LOS ESTUDIANTES
class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

