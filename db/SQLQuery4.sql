use BikeStores
CREATE TABLE usuarios (
	nombre VARCHAR(225) not null,
	clave VARCHAR(10) not null
)
--Insert usuario ('Paola', '123456')
insert into usuarios values
('Paola', '123456'),
('Maria', '654321'),
('Juan', '123456'),
('Pedro', '654321')

select * from usuarios order by nombre

SELECT count(*) FROM usuarios

