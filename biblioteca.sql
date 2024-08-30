-- I am using mysql workbench
-- hostname: localhost 3306
-- password: 12345678
-- username: root
CREATE DATABASE biblioteca;
USE biblioteca;

CREATE TABLE autor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    nacionalidad VARCHAR(100)
);

CREATE TABLE libro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    genero VARCHAR(100),
    año_publicacion YEAR,
    autor_id INT,
    FOREIGN KEY (autor_id) REFERENCES autor(id)
);

CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE prestamo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    libro_id INT,
    fecha_prestamo DATE NOT NULL,
    fecha_devolucion DATE,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (libro_id) REFERENCES libro(id)
);

CREATE TABLE estanteria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seccion VARCHAR(100) NOT NULL,
    numero INT NOT NULL
);

CREATE TABLE libro_estanteria (
    libro_id INT,
    estanteria_id INT,
    ubicacion_exacta VARCHAR(100),
    PRIMARY KEY (libro_id, estanteria_id),
    FOREIGN KEY (libro_id) REFERENCES libro(id),
    FOREIGN KEY (estanteria_id) REFERENCES estanteria(id)
);

CREATE TABLE `role` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(50) NOT NULL
);

CREATE TABLE usuario_role (
    usuario_id INT,
    rol_id INT,
    PRIMARY KEY (usuario_id, rol_id),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (rol_id) REFERENCES `role`(id)
);

-- Insertar autores
INSERT INTO autor (nombre, apellido, nacionalidad) VALUES ('Gabriel', 'García Márquez', 'Colombiana');
INSERT INTO autor (nombre, apellido, nacionalidad) VALUES ('Isabel', 'Allende', 'Chilena');

-- Insertar libros
INSERT INTO libro (titulo, genero, año_publicacion, autor_id) VALUES ('Cien Años de Soledad', 'Novela', 1967, 1);
INSERT INTO libro (titulo, genero, año_publicacion, autor_id) VALUES ('La Casa de los Espíritus', 'Novela', 1982, 2);

-- Insertar usuarios
INSERT INTO usuario (nombre, apellido, email) VALUES ('Juan', 'Pérez', 'juan.perez@example.com');
INSERT INTO usuario (nombre, apellido, email) VALUES ('María', 'González', 'maria.gonzalez@example.com');

-- Insertar préstamos
INSERT INTO prestamo (usuario_id, libro_id, fecha_prestamo, fecha_devolucion) VALUES (1, 1, '2024-06-10', '2024-06-20');
INSERT INTO prestamo (usuario_id, libro_id, fecha_prestamo, fecha_devolucion) VALUES (2, 2, '2024-06-11', NULL);

-- Insertar estanterías
INSERT INTO estanteria (seccion, numero) VALUES ('Literatura', 1);
INSERT INTO estanteria (seccion, numero) VALUES ('Historia', 2);

-- Relacionar libros con estanterías
INSERT INTO libro_estanteria (libro_id, estanteria_id, ubicacion_exacta) VALUES (1, 1, 'A1');
INSERT INTO libro_estanteria (libro_id, estanteria_id, ubicacion_exacta) VALUES (2, 1, 'A2');

-- Insertar roles
INSERT INTO `role` (nombre_rol) VALUES ('Administrador');
INSERT INTO `role` (nombre_rol) VALUES ('Bibliotecario');
INSERT INTO `role` (nombre_rol) VALUES ('Lector');

-- Asignar roles a usuarios
INSERT INTO usuario_role (usuario_id, rol_id) VALUES (1, 1);  -- Juan Pérez es Administrador
INSERT INTO usuario_role (usuario_id, rol_id) VALUES (2, 3);  -- María González es Lector

alter table usuario add username varchar(15);
alter table usuario add password varchar(20);
