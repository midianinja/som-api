import { sliceArgs } from '../utils/query.utils';

/**
* validateSpaceCapacityToCreate - static function that verify if spaceCapacity is valid
*
* @
* @function validateSpaceCapacityToCreate
* @param  {object}  parent    it contains the result returned from the resolver
* on the parent type
* @returns {object} it's validate response, contain the attributes error and msg.
*/
const validateSpaceCapacityToCreate = () => ({ error: false });

/**
* validateSpaceCapacityToUpdate - static function that verify if spaceCapacity is valid
*
* @async
* @function validateSpaceCapacityToUpdate
* @param  {object}  parent    it contains the result returned from the resolver
* on the parent type
* @returns {object} it's validate response, contain the attributes error and msg.
*/
const validateSpaceCapacityToUpdate = () => ({ error: false });

/**
* create - static function that create one spaceCapacity in database.
*
* @function create
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const create = (parent, args, { spaceCapacities }) => {
  // Validate spaceCapacity inputs
  const validate = validateSpaceCapacityToCreate(args);
  if (validate.error) throw new Error(validate.msg);

  // Craete spaceCapacity in the database
  return spaceCapacities.create(args)
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * findOne - function that find one spaceCapacity in database,
  *     generally using an mongo _id attribute.
  *
  * @function findOne
  * @param {object} parent it contains the result returned from the resolver on the parent type
  * @param {object} args it contains filter, sort, skip and limit to build the query
  * @param {object} context it contains all mongo collections
  */
const findOne = (parent, args, { spaceCapacities }) => {
  const options = sliceArgs(args);

  return spaceCapacities.findOne(options.query)
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * findAll - function that find all spaceCapacities in database,
  *       returning all spaceCapacities or some spaceCapacities that
  * have some match with indicated attribute.
  *
  * @function findAll
  * @param {object} parent it contains the result returned from the resolver on the parent type
  * @param {object} args it contains filter, sort, skip and limit to build the query
  * @param {object} context it contains all mongo collections
  */
const findAll = (parent, args, { spaceCapacities }) => {
  const options = sliceArgs(args);
  return spaceCapacities.find(options.query)
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * update - function that update one spaceCapacity in database,
  *         generally using an mongo _id attribute.
  *
  * @function update
  * @param {object} parent it contains the result returned from the resolver on the parent type
  * @param {object} args it contains filter, sort, skip and limit to build the query
  * @param {object} context it contains all mongo collections
  */
const update = (parent, args, { spaceCapacities }) => {
  const validate = validateSpaceCapacityToUpdate(args);
  if (validate.error) throw new Error(validate.msg);

  return spaceCapacities.findOneAndUpdate({ _id: args._id }, args, { new: true })
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
