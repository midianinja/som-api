import UserController from '../../controllers/user.controller';

export default {
  queries: {
    user: UserController.findOne,
    users: UserController.findAll,
  },
  mutations: {
    createUser: UserController.create,
    updateUser: UserController.update,
    addCard: UserController.addCreditCard,
  },
};
