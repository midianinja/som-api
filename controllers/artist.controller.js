import { sliceArgs } from '../utils/query.utils';

/**
  * create - Essa função cria um artista na base de dados
  *
  * @function create
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const create = async (parent, args, { artists, users }) => {
  const validate = {}; // validateArtist(); fazer função de validação
  if (validate.error) throw new Error(validate.msg);

  // Craete artist in the database
  console.log('args.artist:', args.artist);
  const artist = await artists.create(args.artist)
    .then(async resp => resp.populate('user')
      // .populate('approved_events')
      // .populate('subscribed_events')
      // .populate('recused_events')
      // .populate('category')
      .populate('musical_styles')
      .populate('songs')
      .execPopulate())
    .catch((err) => {
      throw new Error(err);
    });

  console.log('artist:', artist);
  await users.findOneAndUpdate(
    { _id: artist.user._id },
    { artist: artist._id },
    { new: true },
  );

  return artist;
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
  console.log('args:', args);

  return artists.findOneAndUpdate({ _id: args.artist_id }, args.artist, { new: true })
    // .populate('approved_events')
    // .populate('subscribed_events')
    // .populate('recused_events')
    .populate('songs')
    .populate('musical_styles')
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
const findOne = (parent, args, { artists }) => artists
  .findOne({ _id: args.id })
  .populate('user')
  .populate('approved_events')
  .populate('subscribed_events')
  .populate('recused_events')
  .populate('musical_genres')
  .populate('category')
  .populate('follows.user')
  .then(resp => resp)
  .catch((err) => {
    throw new Error(err);
  });

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
    .populate('follows.user')
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * follow - Essa função segue um artist
  *
  * @function follow
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const follow = (parent, args, { artists }) => {
  const { artist, user } = args;
  return artists.findOneAndUpdate({ _id: artist }, { follows: { user } }, { new: true })
    .populate('user')
    .populate('approved_events')
    .populate('subscribed_events')
    .populate('recused_events')
    .populate('musical_genres')
    .populate('category')
    .populate('follows.user')
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * unfollow - Essa função deixa de seguir um artist
  *
  * @function follow
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const unfollow = (parent, args, { artists }) => {
  const { artist, user } = args;
  return artists.findOneAndUpdate(
    { _id: artist },
    { $pull: { follows: { $elemMatch: { user } } } },
    { new: true },
  )
    .populate('user')
    .populate('approved_events')
    .populate('subscribed_events')
    .populate('recused_events')
    .populate('musical_genres')
    .populate('category')
    .populate('follows.user')
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
  follow,
  unfollow,
};
