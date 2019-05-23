import CategoryController from '../../controllers/category.controller';

export default {
  queries: {
    oneCategory: CategoryController.findOne,
    allCategories: CategoryController.findAll,
  },
  mutations: {
    createCategory: CategoryController.create,
    updateCategory: CategoryController.update,
  },
};
