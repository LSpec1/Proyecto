CREATE DATABASE Contenidos;

CREATE TABLE personas (
	id int not null unique generated always as identity,
	nombre varchar(50)
);

CREATE TABLE cursos (
	id int not null unique generated always as identity,
	id_profesor int not null,
	nombre varchar(100),
	total_modulos int not null,
	FOREIGN KEY (id_profesor) REFERENCES personas(id)
);

CREATE TABLE videos (
	id int not null unique generated always as identity,
	titulo varchar(150),
	link varchar(150)
);

CREATE TABLE video_curso (
	id_curso int not null,
	id_video int not null,
	modulo int not null,
	FOREIGN KEY (id_curso) REFERENCES cursos(id),
	FOREIGN KEY (id_video) REFERENCES videos(id)
);