from django.db import models

##### ACA CREAMOS EL MODELO QUE NECESITAMOS, LA TABLA, CON LA CONFIGURACION EXACTA
class Student(models.Model):
    ######################### CADA UNO DE LOS CAMPOS OBLIGATORIOS, COMO ASI TAMBIEN EL MAXIMO DE CARACTERES
    carnet = models.CharField(unique=True, max_length=6)
    name = models.CharField(max_length=255)
    last_name  = models.CharField(max_length=255, null=True, default=None, blank = True)
    address = models.CharField(max_length=255)
    gender = models.CharField(max_length=1)
    phone = models.CharField(max_length=20)
    birthday = models.DateField()
    career = models.CharField(max_length=255)
    liric_gender = models.CharField(max_length=30)
    registration_day = models.DateField()

    def __str__(self):
        return self.carnet

