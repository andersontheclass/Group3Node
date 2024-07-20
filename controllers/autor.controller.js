const Autor = require('../models/autor.model');

const retrieve = async (request, response) => {

  const autores = await Autor.findAll();
  console.log(autores.every(autor => autor instanceof Autor));
  console.log('Todos los autores: ', JSON.stringify(autores, null, 2));

  response.json(autores);
};

const retrieveById = async (req = request, response) => {
  const { id } = req.params;
  const _id = parseInt(id);

  const autor = await Autor.findByPk(_id);

  response.json(autor);
};

const create = async (req = request, response) => {
  const { nombre, apellido, nacionalidad } = req.body;

  const newAutor = await Autor.create({ nombre, apellido, nacionalidad });
  
  response.json(newAutor);
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
