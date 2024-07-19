const retrieve = (request, response) => {
  response.json(["la manosa", "2 pesos de agua", "maria la llorona"]);
};

const retrieveById = (request, response) => {
  response.json("klk");
};

const create = (request, response) => {
  response.json("klk post");
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
