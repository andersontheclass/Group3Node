const Libro = require('../models/libro.model')

const retrieve = async (request, response) => {


  const libros = await Libro.findAll();
  console.log(libros.every(libro => libro instanceof Libro));
  console.log('All books:', JSON.stringify(libros, null, 2));

  const _libros = libros.map((book, index) => ({
    id: book.id,
    index: index + 1,
    titulo: book.titulo,
    genero: book.genero,
    año_publicacion: book.año_publicacion,
    autor_id: book.autor_id
  }))

  console.log(_libros);
  response.render('libro/libro-retrieve', { libros: _libros });
};

const retrieveById = async (req = request, response) => {
  //const { id } = req.params;
  //const _id = parseInt(id);

  //const libro = await Libro.findByPk(_id);
  
  response.render('libro/libro-retrieveById');
};

const create = async (req = request, response) => {
  const { titulo, genero, año_publicacion, autor_id } = req.body;

  const newLibro = await Libro.create({ titulo, genero, año_publicacion, autor_id });

  response.render('libro/libro-create', newLibro);
};

const modify = async (request, response) => {
  const { id } = req.params;

  const _id = parseInt(id);
  const libro = await Libro.findByPk(_id);

  const { titulo, genero, año_publicacion, autor_id } = libro;

  response.render('libro/libro-modify', { id, titulo, genero, año_publicacion, autor_id });

};

const saveEditedLibro = async (request, response) => {
  const { id } = request.params;
  const { titulo, genero, año_publicacion, autor_id } = request.body;

  const updateLibro = await Libro.update(
    { titulo, genero, año_publicacion, autor_id },
    {
      where: {
        id
      },
    }
  );
  response.render('libro/libro-retrieve');
}

const remove = (request, response) => {
  response.json("klk delete");
};

module.exports = {
  retrieve,
  //saveEditedLibro,
  retrieveById,
  create,
  modify,
  remove,
};
