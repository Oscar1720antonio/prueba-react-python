from django.db import models


class Student(models.Model):
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

