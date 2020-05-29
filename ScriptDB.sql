CREATE DATABASE olmaton DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

use olmaton;

create table perfil(
id int(11) AUTO_INCREMENT PRIMARY KEY,
descripcion varchar(100) not null unique,
activo boolean not null default true,
date_insert datetime DEFAULT CURRENT_TIMESTAMP,
date_update datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)ENGINE=INNODB;

create table persona(
id int(11) AUTO_INCREMENT PRIMARY KEY,
nombres VARCHAR(100) NOT NULL,
apellidos VARCHAR(30) NOT NULL,
email VARCHAR(100),
activo boolean not null default true,
date_insert datetime DEFAULT CURRENT_TIMESTAMP,
date_update datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
id_usuario int(11)
)ENGINE=INNODB;

create table usuario(
id int(11) AUTO_INCREMENT PRIMARY KEY,
username varchar(20) not null unique,
password varchar(300) not null,
id_perfil int(11) not null,
id_persona int(11) not null,
activo boolean not null default true,
date_insert datetime DEFAULT CURRENT_TIMESTAMP,
date_update datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
id_usuario int(11) null,
CONSTRAINT fk_usuario_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id),
CONSTRAINT fk_usuario_perfil FOREIGN KEY (id_perfil) REFERENCES perfil(id),
CONSTRAINT fk_usuario_persona FOREIGN KEY (id_persona) REFERENCES persona(id)
)ENGINE=INNODB;