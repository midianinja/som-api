import { sliceArgs } from '../utils/query.utils';

/**
* validateAcessibilityToCreate - static function that verify if acessibility is valid
*
* @
* @function validateAcessibilityToCreate
* @param  {object}  parent    it contains the result returned from the resolver
* on the parent type
* @returns {object} it's validate response, contain the attributes error and msg.
*/
const validateAcessibilityToCreate = () => ({ error: false });

/**
* validateAcessibilityToUpdate - static function that verify if acessibility is valid
*
* @async
* @function validateAcessibilityToUpdate
* @param  {object}  parent    it contains the result returned from the resolver
* on the parent type
* @returns {object} it's validate response, contain the attributes error and msg.
*/
const validateAcessibilityToUpdate = () => ({ error: false });

/**
* create - static function that create one acessibility in database.
*
* @function create
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const create = (parent, args, { acessibilities }) => {
  // Validate acessibility inputs
  const validate = validateAcessibilityToCreate(args);
  if (validate.error) throw new Error(validate.msg);

  // Craete acessibility in the database
  return acessibilities.create(args)
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
* findOne - function that find one acessibility in database, generally using an mongo _id attribute.
*
* @function findOne
* @param {object} parent it contains the result returned from the resolver on the parent type
* @param {object} args it contains filter, sort, skip and limit to build the query
* @param {object} context it contains all mongo collections
*/
const findOne = (parent, args, { acessibilities }) => {
  const options = sliceArgs(args);

  return acessibilities.findOne(options.query)
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * findAll - function that find all acessibilities in database,
  *    returning all acessibilities or some acessibilities that
  * have some match with indicated attribute.
  *
  * @function findAll
  * @param {object} parent it contains the result returned from the resolver on the parent type
  * @param {object} args it contains filter, sort, skip and limit to build the query
  * @param {object} context it contains all mongo collections
  */
const findAll = (parent, args, { acessibilities }) => {
  const options = sliceArgs(args);
  return acessibilities.find(options.query)
    .then(resp => resp)
    .catch((err) => {
      throw new Error(err);
    });
};

/**
  * update - function that update one acessibility in database,
  *     generally using an mongo _id attribute.
  *
  * @function update
  * @param {object} parent it contains the result returned from the resolver on the parent type
  * @param {object} args it contains filter, sort, skip and limit to build the query
  * @param {object} context it contains all mongo collections
  */
const update = (parent, args, { acessibilities }) => {
  const validate = validateAcessibilityToUpdate(args);
  if (validate.error) throw new Error(validate.msg);

  return acessibilities.findOneAndUpdate({ _id: args._id }, args, { new: true })
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
