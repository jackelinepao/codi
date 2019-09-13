create database singin
use singin

create table usuarios
(
	nombre varchar(225) not null,
	correo varchar(225) not null,
	contrasena varchar(8) not null,
	fecha_nacimiento datetime not null,
	privilegios int not null
)