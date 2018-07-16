CREATE TABLE usuarios(
 	id int NOT NULL AUTO_INCREMENT,
 	nombre varchar(50),
 	dni int,

 	CONSTRAINT usuarios_unique UNIQUE (nombre,dni),
 	CONSTRAINT usuarios_pk PRIMARY KEY (id)
)