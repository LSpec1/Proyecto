CREATE DATABASE Contenidos;

CREATE TABLE personas (
	id int not null,
	nombre varchar(50)
);

CREATE TABLE cursos (
	id int not null,
	id_profesor int not null,
	nombre varchar(100),
	total_modulos int not null,
	FOREIGN KEY (id_profesor) REFERENCES personas(id)
);

CREATE TABLE videos (
	id_curso int not null,
	id_video_curso int not null,
	modulo int not null,
	titulo varchar(150),
	link varchar(150),
	FOREIGN KEY (id_curso) REFERENCES cursos(id)
);

CREATE TABLE tipos_cursos (
	id int not null,
	tipo varchar(150)
);

CREATE VIEW videos_cursos as
select v.id_curso, c.nombre as curso, v.id_video_curso, v.modulo, c.total_modulos as total, v.titulo, v.link
from videos as v, cursos as c
where v.id_curso = c.id
order by v.id_curso, v.modulo, v.id_video_curso




drop table if exists empleos;
create table empleos (
	_idNoticia serial,
	titulo varchar(50),
	empresa varchar(50),
	pais varchar(50),
	ciudad varchar(50),
	imagen varchar(200),
	fecha date,
	descripcion varchar(500),
	contacto varchar(20),
	correo varchar(100),
	isVerificada boolean,
	salario int,
	jornada varchar(20),
	constraint pk_idNoticia primary key (_idNoticia)
);

--copy empleos from 'D:\bd_empleos.csv' CSV DELIMITER ',' header encoding 'utf-8';

--Para importar un archivo excel.csv - COPY videos from 'C:\bd.csv' CSV delimiter ',' header encoding 'Latin1';
--Para exportar un archivo excel.csv - COPY videos to 'C:\bd.csv' CSV delimiter ',' header encoding 'Latin1';