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
insert into tipos_cursos(tipo) values ('Programación'), ('Humanidades'), ('Diseño');

--Para importar un archivo excel.csv - COPY videos from 'C:\bd.csv' CSV delimiter ',' header encoding 'Latin1';
--Para exportar un archivo excel.csv - COPY videos to 'C:\bd.csv' CSV delimiter ',' header encoding 'Latin1';