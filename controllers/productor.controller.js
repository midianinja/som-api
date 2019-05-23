import { sliceArgs } from '../utils/query.utils';

/**
* validateProductorToCreate - static function that verify if productor is valid
*
* @
* @function validateProductorToCreate
* @param  {object}  parent    it contains the result returned from the resolver
* on the parent type
* @returns {object} it's validate response, contain the attributes error and msg.
*/
const validateProductorToCreate = () => ({ error: false });

/**
* validateProductorToUpdate - static function that verify if productor is valid
*
* @async
* @function validateProductorToUpdate
* @param  {object}  parent    it contains the result returned from the resolver
* on the parent type
* @returns {object} it's validate response, contain the attributes error and msg.
*/
const validateProductorToUpdate = () => ({ error: false });

/**
* create - static function that create one productor in database.
*
* @function create
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const create = (parent, args, { productors }) => {
  // Validate productor inputs
  const validate = validateProductorToCreate(args);
  if (validate.error) throw new Error(validate.msg);

  // Craete productor in the database
  return productors.create(args)
    .populate('user')
    // .populate('events')
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
* findOne - function that find one productor in database, generally using an mongo _id attribute.
*
* @function findOne
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findOne = (parent, args, { productors }) => {
  const options = sliceArgs(args);

  return productors.findOne(options.query)
    .populate('user')
    // .populate('events')
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * findAll - function that find all productors in database,
  *         returning all productors or some productors that
  * have some match with indicated attribute.
  *
  * @function findAll
  * @param {object} parent it contains the result returned from the resolver on the parent type
  * @param {object} args it contains filter, sort, skip and limit to build the query
  * @param {object} context it contains all mongo collections
  */
const findAll = (parent, args, { productors }) => {
  const options = sliceArgs(args);
  return productors.find(options.query)
    .populate('user')
    // .populate('events')
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
* update - function that update one productor in database, generally using an mongo _id attribute.
*
* @function update
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const update = (parent, args, { productors }) => {
  const validate = validateProductorToUpdate(args);
  if (validate.error) throw new Error(validate.msg);

  return productors.findOneAndUpdate({ _id: args._id }, args, { new: true })
    .populate('user')
    // .populate('events')
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
