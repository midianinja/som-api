import AcessibilityController from '../../controllers/acessibility.controller';

export default {
  queries: {
    oneAcessibility: AcessibilityController.findOne,
    allAcessibilities: AcessibilityController.findAll,
  },
  mutations: {
    createAcessibility: AcessibilityController.create,
    updateAcessibility: AcessibilityController.update,
  },
};
