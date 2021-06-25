CREATE TABLE IF NOT EXISTS tareas (
 id_usuario int PRIMARY KEY NOT NULL AUTO_INCREMENT,
 nombre varchar (25),
 paterno Varchar (25),
 materno Varchar (25),
 sexo varchar (10),
 fecha_nacimiento date,
 email varchar (25),
 contrasenia varchar (25)
 ) ENGINE=INNODB;