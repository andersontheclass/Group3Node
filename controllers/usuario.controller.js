const User = require('../models/usuario.model')

const retrieve = async (request, response) => {

  // Find all users
  const users = await User.findAll();
  console.log(users.every(user => user instanceof User)); // true
  console.log('All users:', JSON.stringify(users, null, 2));

  response.json(users);
};

const retrieveById = async (req = request, response) => {
  const { id } = req.params;
  const _id = parseInt(id);

  const user = await User.findByPk(_id);

  response.json(user);
};

const create = async (req = request, response) => {
  const { nombre, apellido, email, username, password } = req.body;

  const newUser = await User.create({ nombre, apellido, email, username, password });

    response.json(newUser);
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
