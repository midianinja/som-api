import EventController from '../../controllers/event.controller';

export default {
  queries: {
    oneEvent: EventController.findOne,
    allEvents: EventController.findAll,
  },
  mutations: {
    createEvent: EventController.create,
    updateEvent: EventController.update,
    subscribeEvent: EventController.subscribe,
    unsubscribeEvent: EventController.unsubscribe,
  },
};
