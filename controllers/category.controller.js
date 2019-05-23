import { sliceArgs } from '../utils/query.utils';

/**
* validatedCategoryToCreate - static function that verify if category is valid
*
* @
* @function validatedCategoryToCreate
* @param  {object}  parent    it contains the result returned from the resolver
* on the parent type
* @returns {object} it's validate response, contain the attributes error and msg.
*/
const validatedCategoryToCreate = () => ({ error: false });

/**
* validatedCategoryToUpdate - static function that verify if category is valid
*
* @async
* @function validatedCategoryToUpdate
* @param  {object}  parent    it contains the result returned from the resolver
* on the parent type
* @returns {object} it's validate response, contain the attributes error and msg.
*/
const validatedCategoryToUpdate = () => ({ error: false });

/**
* create - static function that create one category in database.
*
* @function create
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const create = (parent, args, { categories }) => {
  // Validate category inputs
  const validate = validatedCategoryToCreate(args);
  if (validate.error) throw new Error(validate.msg);

  // Craete category in the database
  return categories.create(args)
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
* findOne - function that find one category in database, generally using an mongo _id attribute.
*
* @function findOne
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findOne = (parent, args, { categories }) => {
  const options = sliceArgs(args);

  return categories.findOne(options.query)
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * findAll - function that find all categories in database,
  *       returning all categories or some categories that
  * have some match with indicated attribute.
  *
  * @function findAll
  * @param {object} parent it contains the result returned from the resolver on the parent type
  * @param {object} args it contains filter, sort, skip and limit to build the query
  * @param {object} context it contains all mongo collections
  */
const findAll = (parent, args, { categories }) => {
  const options = sliceArgs(args);
  return categories.find(options.query)
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
* update - function that update one category in database, generally using an mongo _id attribute.
*
* @function update
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const update = (parent, args, { categories }) => {
  const validate = validatedCategoryToUpdate(args);
  if (validate.error) throw new Error(validate.msg);

  return categories.findOneAndUpdate({ _id: args._id }, args, { new: true })
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
