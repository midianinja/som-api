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

  try {
    // Craete artist in the database
    const artist = await artists.create(args.artist)
      .then(async resp => resp.populate('user')
        // .populate('approved_events')
        // .populate('subscribed_events')
        // .populate('recused_events')
        // .populate('category')
        .populate('musical_styles')
        .populate('songs')
        .populate('user')
        .execPopulate())
      .catch((err) => {
        throw new Error(err);
      });
    await users.findOneAndUpdate(
      { _id: artist.user._id },
      { artist: artist._id },
      { new: true },
    );
    return artist;
  } catch (err) {
    console.log('err:', err);
    throw err;
  }
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
  .populate('musical_styles')
  .populate('category')
  .populate('follows.user')
  .then(resp => resp)
  .catch((err) => {
    throw new Error(err);
  });

/**
  * searchArtists - Essa função procura e retorna vários artistas da base de dados
  *
  * @function searchArtists
  * @param {object} parent Informações de um possível pai
  * @param {object} args Informações envadas na queuery ou mutation
  * @param {object} context Informações passadas no context para o apollo graphql
  */
const searchArtists = (parent, args, { artists }) => artists.find(args.artist)
  .skip(args.paginator.skip)
  .limit(args.paginator.limit)
  .populate('user')
  .populate('approved_events')
  .populate('subscribed_events')
  .populate('recused_events')
  .populate('musical_genres')
  .populate('musical_styles')
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
    .populate('musical_styles')
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
const follow = async (parent, args, { artists, users }) => {
  const { artist, user } = args;
  await users.findOneAndUpdate(
    { _id: user },
    {
      $push: { following_artists: artist },
    },
    { new: true },
  );
  return artists.findOneAndUpdate({ _id: artist }, { follows: { user } }, { new: true })
    .populate('user')
    .populate('approved_events')
    .populate('subscribed_events')
    .populate('recused_events')
    .populate('musical_styles')
    .populate('musical_genres')
    .populate('category')
    .populate('follows.user')
    .populate('following_artists')
    .populate('following_productors')
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
const unfollow = async (parent, args, { artists, users }) => {
  try {
    const { artist, user } = args;
    await users.findOneAndUpdate(
      { _id: user },
      {
        $pull: { following_artists: artist },
      },
      { new: true },
    );
    const myartist = await artists.findOneAndUpdate(
      { _id: artist },
      { $pull: { follows: { user } } },
      { new: true },
    )
      .populate('user')
      .populate('approved_events')
      .populate('subscribed_events')
      .populate('recused_events')
      .populate('musical_styles')
      .populate('musical_genres')
      .populate('category')
      .populate('follows.user')
      .then(resp => resp)
      .catch((err) => {
        throw new Error(err);
      });
    console.log('artist:', myartist);
    return myartist;
  } catch (err) {
    console.log('err:', err);
    throw err;
  }
};

export default {
  create,
  findOne,
  findAll,
  update,
  searchArtists,
  follow,
  unfollow,
};
