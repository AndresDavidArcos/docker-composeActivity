# Redes y Volúmenes en Docker

En esta actividad se van a levantar 3 contenedores con docker compose.
Una base de datos, una api y un bash.
En esta entrega la base de datos tendra informacion de profesores y estudiantes, la api tendra las rutas y controladores que realiaran las consultas a esta base de datos.
El bash sera usado de alpine y se probara con el comando ping que los contenedores estan aislados y el bash no puede comunicar directamente a la base de datos sin antes pasar por la api.

Para levantar los contenedores se hara con una consola parandose en el directorio con el docker compose
y ejecutar el comando:
```
docker-compose up -d 
```
La base de datos en este momento aun no tiene el esquema ni las inserciones, por lo que se importan del archivo sql que esta subido a este repositorio. 
* [La_base_de_datos](database.sql)
Para importarlo se hara con el comando:
```
docker exec -i basededatos psql -U postgres attendancebd < ...\attendancedocker\database.sql

```
Una vez cargada la base de datos, aun asi se elimine el contenedor esta seguira teniendo los datos y en caso de volver a lanzar el contenedor se podran usar sin tener que importarlos denuevo.

Para poder hacer una peticion a la api se ingresara al bash con:
```
docker attach bash
```
Y desde ahi hacer un:
```
curl api:2000/info/profesores
```
El cual sera una peticion get que nos mostrara en un json informacion de los profesores consultados de la base de datos.
