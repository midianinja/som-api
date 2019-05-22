import { sliceArgs } from '../utils/query.utils';

/**
* validateUserToCreate - static function that verify if user is valid
*
* @
* @function validateUserToCreate
* @param  {object}  parent    it contains the result returned from the resolver
* on the parent type
* @returns {object} it's validate response, contain the attributes error and msg.
*/
const validateUserToCreate = () => ({ error: false });

/**
* validateUserToUpdate - static function that verify if user is valid
*
* @async
* @function validateUserToUpdate
* @param  {object}  parent    it contains the result returned from the resolver
* on the parent type
* @returns {object} it's validate response, contain the attributes error and msg.
*/
const validateUserToUpdate = () => ({ error: false });

/**
* create - static function that create one user in database.
*
* @function create
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const create = (parent, args, { users }) => {
  // Validate user inputs
  const validate = validateUserToCreate(args);
  if (validate.error) throw new Error(validate.msg);

  // Craete user in the database
  return users.create(args)
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
* findOne - function that find one user in database, generally using an mongo _id attribute.
*
* @function findOne
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findOne = (parent, args, { users }) => {
  const options = sliceArgs(args);

  return users.findOne(options.query).populate('cards')
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
* findAll - function that find all users in database, returning all users or some users that
* have some match with indicated attribute.
*
* @function findAll
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findAll = (parent, args, { users }) => {
  const options = sliceArgs(args);
  return users.find(options.query)
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
* update - function that update one user in database, generally using an mongo _id attribute.
*
* @function update
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const update = (parent, args, { users }) => {
  const validate = validateUserToUpdate(args);
  if (validate.error) throw new Error(validate.msg);

  return users.findOneAndUpdate({ _id: args._id }, args, { new: true }).populate('cards')
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
* update - function that update one user in database, generally using an mongo _id attribute.
*
* @function update
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const addCreditCard = (parent, args, { users }) => {
  const validate = validateUserToUpdate(args);
  if (validate.error) throw new Error(validate.msg);

  const toUpdate = { $push: { cards: args.card_id } };

  return users.findOneAndUpdate({ _id: args._id }, toUpdate, { new: true }).populate('cards')
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
  addCreditCard,
};
