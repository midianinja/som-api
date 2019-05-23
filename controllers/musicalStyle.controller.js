import { sliceArgs } from '../utils/query.utils';

/**
* validateMusicalStyleToCreate - static function that verify if musicalStyle is valid
*
* @
* @function validateMusicalStyleToCreate
* @param  {object}  parent    it contains the result returned from the resolver
* on the parent type
* @returns {object} it's validate response, contain the attributes error and msg.
*/
const validateMusicalStyleToCreate = () => ({ error: false });

/**
* validateMusicalStyleToUpdate - static function that verify if musicalStyle is valid
*
* @async
* @function validateMusicalStyleToUpdate
* @param  {object}  parent    it contains the result returned from the resolver
* on the parent type
* @returns {object} it's validate response, contain the attributes error and msg.
*/
const validateMusicalStyleToUpdate = () => ({ error: false });

/**
* create - static function that create one musicalStyle in database.
*
* @function create
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const create = (parent, args, { musicalStyles }) => {
  // Validate musicalStyle inputs
  const validate = validateMusicalStyleToCreate(args);
  if (validate.error) throw new Error(validate.msg);

  // Craete musicalStyle in the database
  return musicalStyles.create(args)
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
* findOne - function that find one musicalStyle in database, generally using an mongo _id attribute.
*
* @function findOne
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findOne = (parent, args, { musicalStyles }) => {
  const options = sliceArgs(args);

  return musicalStyles.findOne(options.query)
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * findAll - function that find all musicalStyles in database,
  *     returning all musicalStyles or some musicalStyles that
  * have some match with indicated attribute.
  *
  * @function findAll
  * @param {object} parent it contains the result returned from the resolver on the parent type
  * @param {object} args it contains filter, sort, skip and limit to build the query
  * @param {object} context it contains all mongo collections
  */
const findAll = (parent, args, { musicalStyles }) => {
  const options = sliceArgs(args);
  return musicalStyles.find(options.query)
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * update - function that update one musicalStyle in database,
  *       generally using an mongo _id attribute.
  *
  * @function update
  * @param {object} parent it contains the result returned from the resolver on the parent type
  * @param {object} args it contains filter, sort, skip and limit to build the query
  * @param {object} context it contains all mongo collections
  */
const update = (parent, args, { musicalStyles }) => {
  const validate = validateMusicalStyleToUpdate(args);
  if (validate.error) throw new Error(validate.msg);

  return musicalStyles.findOneAndUpdate({ _id: args._id }, args, { new: true })
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
