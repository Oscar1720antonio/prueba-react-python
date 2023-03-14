from django.urls import path
from .views import StudentList, StudentDetail

urlpatterns = [
    ######################### ESTA ES LA RUTA PARA LOS FORMULARIOS COMPLETOS
    path('student/', StudentList.as_view()),
    ######################### ESTA ES LA RUTA PARA EDITAR, CONFIGURAR, ELIMINAR CADA DETALLE DE LOS ESTUDIANTES
    path('student/<int:pk>/', StudentDetail.as_view()),  
]
