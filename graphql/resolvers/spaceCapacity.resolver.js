import SpaceCapacityController from '../../controllers/spaceCapacity.controller';

export default {
  queries: {
    oneSpaceCapacity: SpaceCapacityController.findOne,
    allSpaceCapacities: SpaceCapacityController.findAll,
  },
  mutations: {
    createSpaceCapacity: SpaceCapacityController.create,
    updateSpaceCapacity: SpaceCapacityController.update,
  },
};
