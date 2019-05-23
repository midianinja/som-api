import { sliceArgs } from '../utils/query.utils';

/**
* validateArtistToCreate - static function that verify if artist is valid
*
* @
* @function validateArtistToCreate
* @param  {object}  parent    it contains the result returned from the resolver
* on the parent type
* @returns {object} it's validate response, contain the attributes error and msg.
*/
const validateArtistToCreate = () => ({ error: false });

/**
* validateArtistToUpdate - static function that verify if artist is valid
*
* @async
* @function validateArtistToUpdate
* @param  {object}  parent    it contains the result returned from the resolver
* on the parent type
* @returns {object} it's validate response, contain the attributes error and msg.
*/
const validateArtistToUpdate = () => ({ error: false });

/**
* create - static function that create one artist in database.
*
* @function create
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const create = (parent, args, { artists }) => {
  // Validate artist inputs
  const validate = validateArtistToCreate(args);
  if (validate.error) throw new Error(validate.msg);

  // Craete artist in the database
  return artists.create(args)
    .populate('user')
    .populate('musical_style')
    .populate('participated_events')
    .populate('subscribed_events')
    .populate('openeds_events')
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
* findOne - function that find one artist in database, generally using an mongo _id attribute.
*
* @function findOne
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findOne = (parent, args, { artists }) => {
  const options = sliceArgs(args);

  return artists.findOne(options.query)
    .populate('user')
    .populate('musical_style')
    .populate('participated_events')
    .populate('subscribed_events')
    .populate('openeds_events')
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
* findAll - function that find all artists in database, returning all artists or some artists that
* have some match with indicated attribute.
*
* @function findAll
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findAll = (parent, args, { artists }) => {
  const options = sliceArgs(args);
  return artists.find(options.query)
    .populate('user')
    .populate('musical_style')
    .populate('participated_events')
    .populate('subscribed_events')
    .populate('openeds_events')
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
* update - function that update one artist in database, generally using an mongo _id attribute.
*
* @function update
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const update = (parent, args, { artists }) => {
  const validate = validateArtistToUpdate(args);
  if (validate.error) throw new Error(validate.msg);

  return artists.findOneAndUpdate({ _id: args._id }, args, { new: true })
    .populate('user')
    .populate('musical_style')
    .populate('participated_events')
    .populate('subscribed_events')
    .populate('openeds_events')
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
