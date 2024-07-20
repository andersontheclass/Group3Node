const Libro = require('../models/libro.model')

const retrieve = async (request, response) => {

  const libros = await Libro.findAll();
  console.log(libros.every(libro => libro instanceof Libro));
  console.log('All books:', JSON.stringify(libros, null, 2));

  response.json(libros);
};

const retrieveById = async (req = request, response) => {
  const { id } = req.params;
  const _id = parseInt(id);

  const libro = await Libro.findByPk(_id);
  response.json(libro);
};

const create = async (req = request, response) => {
  const { titulo, genero, año_publicacion, autor_id } = req.body;

  const newLibro = await Libro.create({ titulo, genero, año_publicacion, autor_id });

  response.json(newLibro);
};

const modify = (request, response) => {
  response.json("klk put");
};

const remove = (request, response) => {
  response.json("klk delete");
};

module.exports = {
  retrieve,
  retrieveById,
  create,
  modify,
  remove,
};
