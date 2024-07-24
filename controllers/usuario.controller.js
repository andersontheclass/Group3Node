const Usuario = require('../models/usuario.model');

const retrieve = async (request, response) => {

  // Find all users
  const users = await User.findAll();
  console.log(users.every(user => user instanceof User)); // true
  console.log('All users:', JSON.stringify(users, null, 2));

  const _users = users.map((user) => ({
    id: user.id,
    nombre: user.nombre,
    apellido: user.apellido,
    email: user.email,
    username: user.username
  }))

  console.log(_users);
  response.render('usuario/index', {usuarios:_users});
};

const retrieveById = async (req = request, response) => {
  //const { id } = req.params;
  //const _id = parseInt(id);

  //const user = await User.findByPk(_id);

  response.render('usuario/retrieveById');
};

const create = async (req = request, response) => {
  const { nombre, apellido, email, username, password } = req.body;

  const newUser = await Usuario.create({ nombre, apellido, email, username, password });

    response.render('usuario/usuario-create', newUser);
};

const modify = async (request, response) => {
  const { id } = req.params;

  const _id = parseInt(id);
  const usuario = await Usuario.findByPk(_id);

  const { nombre, apellido, email, username, password } = usuario;

  response.render('usuario/usuario-modify', { id, nombre, apellido, email, username, password });
};

const saveEditedUsuario = async (request, response) => {
  const { id } = request.params;
  const { nombre, apellido, email, username, password } = request.body;

  const updateUsuario = await Usuario.update(
    { nombre, apellido, email, username, password },
    {
      where: {
        id
      },
    }
  );
  response.render('usuario/usuario-retrieve');
}


const remove = (request, response) => {
  response.json("klk delete");
};

module.exports = {
  retrieve,
  //saveEditedUsuario
  retrieveById,
  create,
  modify,
  remove,
};
