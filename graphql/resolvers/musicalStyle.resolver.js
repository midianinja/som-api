import MusicalStyleController from '../../controllers/musicalStyle.controller';

export default {
  queries: {
    oneMusicalStyle: MusicalStyleController.findOne,
    allMusicalStyles: MusicalStyleController.findAll,
  },
  mutations: {
    createMusicalStyle: MusicalStyleController.create,
    updateMusicalStyle: MusicalStyleController.update,
  },
};
