import { sliceArgs } from '../utils/query.utils';

/**
  * create - Essa função cria um artista na base de dados
  *
  * @function create
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const create = (parent, args, { artists }) => {
  const validate = {}; // validateArtist(); fazer função de validação
  if (validate.error) throw new Error(validate.msg);

  // Craete artist in the database
  return artists.create(args.artist)
    .then(resp => resp.populate('user')
      .populate('approved_events')
      .populate('subscribed_events')
      .populate('recused_events')
      .populate('musical_genres')
      .populate('category')
      .execPopulate())
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * update - Essa função atualiza um artista na base de dados
  *
  * @function update
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const update = (parent, args, { artists }) => {
  const validate = {}; // validateArtist(); fazer função de validação
  if (validate.error) throw new Error(validate.msg);

  return artists.findOneAndUpdate({ _id: args.artist_id }, args.artist, { new: true })
    .populate('user')
    .populate('approved_events')
    .populate('subscribed_events')
    .populate('recused_events')
    .populate('musical_genres')
    .populate('category')
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * findOne - Essa função procura e retorna um artista na base de dados
  *
  * @function findOne
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const findOne = (parent, args, { artists }) => {
  const options = sliceArgs(args);

  return artists.findOne(options.query.artist)
    .populate('user')
    .populate('approved_events')
    .populate('subscribed_events')
    .populate('recused_events')
    .populate('musical_genres')
    .populate('category')
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * findAll - Essa função procura e retorna vários artistas da base de dados
  *
  * @function findAll
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const findAll = (parent, args, { artists }) => {
  const options = sliceArgs(args);
  return artists.find(options.query.artist)
    .populate('user')
    .populate('approved_events')
    .populate('subscribed_events')
    .populate('recused_events')
    .populate('musical_genres')
    .populate('category')
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
