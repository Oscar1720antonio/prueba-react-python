from rest_framework import serializers
from .models import Student
######################### ESTA ES EL SERIALIZER PARA LA CONFIGURACION DE LOS MODELOS Y LAS VISTAS
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('__all__')

