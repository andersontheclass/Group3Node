const Autor = require('../models/autor.model');
const Prestamo = require('../models/prestamo.model')

const retrieve = async (request, response) => {
  

  // Find all users
  const prestamos = await Prestamo.findAll();
  console.log(prestamos.every(prestamo => prestamo instanceof Prestamo)); // true
  console.log('All prestamos:', JSON.stringify(prestamos, null, 2));

  const _prestamos = prestamos.map((prestamo, index) => ({
    id: prestamo.id,
    index: index + 1,
    usuario_id: prestamo.usuario_id,
    libro_id: prestamo.libro_id,
    fecha_prestamo: prestamo.fecha_prestamo,
    fecha_devolucion: prestamo.fecha_devolucion
  }))

  console.log(_prestamos);
  response.render('prestamo/prestamo-retrieve', { prestamos: _prestamos });
};

const retrieveById = async (request, response) => {
  //const { id } = req.params;
  //const _id = parseInt(id);

  //const prestamo = await Prestamo.findByPk(_id);
  
  response.render('prestamo/prestamo-retrieveById');
};

const create = async (req = request, response) => {
  const { id, usuario_id, libro_id, fecha_prestamo, fecha_devolucion } = req.body;

  const newPrestamo = await Prestamo.create({ id, usuario_id, libro_id, fecha_prestamo, fecha_devolucion });

  response.render('prestamo/prestamo-create', newPrestamo);
};

const modify = async (request, response) => {
  const { id } = req.params;

  const _id = parseInt(id);
  const prestamo = await Prestamo.findByPk(_id);

  const { usuario_id, libro_id, fecha_prestamo, fecha_devolucion } = prestamo;

  response.render('prestamo/prestamo-modify', { id, usuario_id, libro_id, fecha_prestamo, fecha_devolucion });

};

const saveEditedPrestamo = async (request, response) => {
  const { id } = request.params;
  const { usuario_id, libro_id, fecha_prestamo, fecha_devolucion } = request.body;

  const updatePrestamo = await Prestamo.update(
    { usuario_id, libro_id, fecha_prestamo, fecha_devolucion },
    {
      where: {
        id
      },
    }
  );
  response.render('prestamo/prestamo-retrieve');
}

const remove = (request, response) => {
  response.json("klk delete");
};

module.exports = {
  retrieve,
  //saveEditedAutor,
  retrieveById,
  create,
  modify,
  remove,
};
