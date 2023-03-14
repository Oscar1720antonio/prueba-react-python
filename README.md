Prueba tecnica 
DJANGO ---- REACT JS

Este repositorio cuenta con un api rest el cual esta hecho con django de python.
El frontend esta realizado en framework react Js.

La Universidad de Guatemala tendrá un evento de poesía y se ha emitido invitación a todos
los jóvenes estudiantes a participar, los requerimientos para ello son:
Llenar el formulario con los siguientes datos:
• Carnet: Será válido si el valor alfanumérico del carnet cumple las siguientes condiciones:
o La longitud del carnet será de 6 caracteres y entre su cadena no tendrá ceros
o El primer carácter deberá ser A (distingue entre mayúscula y minúscula)
o El tercer carácter deberá de ser 5
o El ultimo carácter deberá de terminar en 1,3 o 9.
• Nombre completo
• Dirección
• Género (masculino, femenino)
• Teléfono
• Fecha de nacimiento: será válido si es mayor a 17 años
• Carrera
• Genero de poesía (lírica, épica, dramática)
• Fecha de inscripción (se calculará automáticamente al registrarse)
*todos los campos son requeridos.
En base al anterior enunciado se le pide lo siguiente:
• Desarrolle el formulario el cual permita que los concursantes puedan inscribirse, una vez el
concursante haya guardado sus datos el sistema automáticamente les deberá calcular y
mostrar (en otra pantalla) la fecha en la cual deberá de declamar, esta fecha se calcula de la
siguiente forma (recordar que está fecha también deberá de estar guardada en base de
datos):
o Si el carnet termina en 1 y su género de poesía es dramático concursara 5 días
después de la inscripción, tomar en cuenta que los sábados y domingos no cuentan.
o Si el carnet termina en 3 y su género de poesía es épica concursara el último día del
mes que se inscribió, tomar en cuenta que los sábados y domingos no cuentan
o Para todas las demás terminaciones de carnets válidos y géneros de poesía la fecha
será el último viernes de la semana que se inscribió.

• También debe de generarse un reporte para que los encargados del concurso puedan
visualizar a todos los estudiantes inscritos por carrera, edad, genero de poesía y la fecha de
declamación (dejar un link en la parte superior para ver el reporte, no es necesario
desarrollar un login)
