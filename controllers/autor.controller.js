const Autor = require('../models/autor.model');

const retrieve = async (request, response) => {


  const autores = await Autor.findAll();
  console.log(autores.every(autor => autor instanceof Autor));
  console.log('Todos los autores: ', JSON.stringify(autores, null, 2));

  const _autores = autores.map((autor, index) => ({
    id: autor.id,
    index: index + 1,
    nombre: autor.nombre,
    apellido: autor.apellido,
    nacionalidad: autor.nacionalidad
  }))

  console.log(_autores);

  response.json('autor/autor-retrieve', { autores: _autores});
};

const retrieveById = async (req = request, response) => {
  //const { id } = req.params;
  //const _id = parseInt(id);

  //const autor = await Autor.findByPk(_id);

  response.render('autor/autor-retrieveById');
};

const create = async (req = request, response) => {
  const { nombre, apellido, nacionalidad } = req.body;

  const newAutor = await Autor.create({ nombre, apellido, nacionalidad });
  
  response.render('autor/autor-create', newAutor);
};

const modify = async (request, response) => {
  const { id } = req.params;

  const _id = parseInt(id);
  const autor = await Autor.findByPk(_id);

  const { nombre, apellido, nacionalidad } = autor;

  response.render('autor/autor-modify', { nombre, apellido, nacionalidad });

};

const saveEditedAutor = async (request, response) => {
  const { id } = request.params;
  const { nombre, apellido, nacionalidad } = request.body;

  const updateAutor = await Autor.update(
    { nombre, apellido, nacionalidad },
    {
      where: {
        id
      },
    }
  );
  response.render('autor/autor-retrieve');
}

const remove = (request, response) => {
  response.json("klk delete");
};

module.exports = {
  retrieve,
  //saveEditedAutor
  retrieveById,
  create,
  modify,
  remove,
};
