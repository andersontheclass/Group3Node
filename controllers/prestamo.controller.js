const Prestamo = require('../models/prestamo.model')

const retrieve = async (request, response) => {
  
  // Find all users
  const prestamos = await Prestamo.findAll();
  console.log(prestamos.every(prestamo => prestamo instanceof Prestamo)); // true
  console.log('All prestamos:', JSON.stringify(prestamos, null, 2));

  response.json(prestamos);
};

const retrieveById = async (request, response) => {
  const { id } = req.params;
  const _id = parseInt(id);

  const prestamo = await Prestamo.findByPk(_id);
  
  response.json(prestamo);
};

const create = async (req = request, response) => {
  const { id, usuario_id, libro_id, fecha_prestamo, fecha_devolucion } = req.body;

  const newPrestamo = await Prestamo.create({ id, usuario_id, libro_id, fecha_prestamo, fecha_devolucion });

  response.json(newPrestamo);
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
