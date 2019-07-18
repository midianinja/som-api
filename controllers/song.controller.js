import { sliceArgs } from '../utils/query.utils';

/**
  * create - Essa função cria uma opção de acessibilidade na base de dados
  *
  * @function create
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const create = (parent, args, { songs }) => {
  const validate = {}; // validateAcessibilityOption(); fazer função de validação
  if (validate.error) throw new Error(validate.msg);

  return songs.create(args.song)
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * update - Essa função atualiza uma opção de acessibilidade.
  *
  * @function update
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const update = (parent, args, { songs }) => {
  const validate = {}; // validateAcessibilityOption(); fazer função de validação
  if (validate.error) throw new Error(validate.msg);

  return songs.findOneAndUpdate(
    { _id: args.song_id },
    args.song,
    { new: true },
  )
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * findOne - Essa função procura e returna uma opção de acessibilidade.
  *
  * @function findOne
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const findOne = (parent, args, { songs }) => {
  const options = sliceArgs(args);

  return songs.findOne(options.query)
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * findAll - Essa função procura e retorna varias musicas.
  *
  * @function findAll
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const findAll = (parent, args, { songs }) => {
  const options = sliceArgs(args);
  return songs.find(options.query.song)
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

export default {
  create,
  findOne,
  findAll,
  update,
};
