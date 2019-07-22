import { sliceArgs } from '../utils/query.utils';

/**
  * create - Essa função cria um evento na base de dados
  *
  * @function create
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const create = (parent, args, { events }) => {
  const validate = {}; // validateEvent(); fazer função de validação
  if (validate.error) throw new Error(validate.msg);

  return events.create(args.event)
    .then(resp => resp
      .populate('approved_artists')
      .populate({
        path: 'productor',
        populate: {
          path: 'location',
        },
      })
      .populate('location')
      .populate('subscribers'))
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * update - Essa função atualiza um evento de evento na base de dados
  *
  * @function update
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const update = (parent, args, { events }) => {
  const validate = {}; // validateArtist(); fazer função de validação
  if (validate.error) throw new Error(validate.msg);

  return events.findOneAndUpdate({ _id: args.event_id }, args.event, { new: true })
    .populate('approved_artists')
    .populate({
      path: 'productor',
      populate: {
        path: 'location',
      },
    })
    .populate('location')
    .populate('subscribers')
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * findOne - Essa função procura e retorna um evento base de dados
  *
  * @function findOne
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const findOne = (parent, args, { events }) => {
  const options = sliceArgs(args);

  return events.findOne({ _id: options.query.id })
    .populate('approved_artists')
    .populate({
      path: 'productor',
      populate: {
        path: 'location',
      },
    })
    .populate('location')
    .populate('subscribers')
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * findAll - Essa função procura e retorna vários eventos da base de dados
  *
  * @function findAll
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const findAll = (parent, args, { events }) => {
  const options = sliceArgs(args);
  return events.find(options.query.event)
    .populate('approved_artists')
    .populate({
      path: 'productor',
      populate: {
        path: 'location',
      },
    })
    .populate('location')
    .populate('subscribers')
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * subscribe - Essa função adiciona artista aos inscritos
  *
  * @function subscribe
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const subscribe = (parent, args, { events }) => {
  const { id, artistID } = args;
  return events.findOneAndUpdate({ _id: id }, { subscribers: artistID }, { new: true });
};

/**
  * unsubscribe - Essa função remove artista aos inscritos
  *
  * @function unsubscribe
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const unsubscribe = (parent, args, { events }) => {
  const { id, artistID } = args;
  return events.findOneAndUpdate({ _id: id }, {
    $pull: { subscribers: artistID },
  }, { new: true });
};

export default {
  create,
  findOne,
  findAll,
  update,
  unsubscribe,
  subscribe,
};
