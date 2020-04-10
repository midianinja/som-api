import EventController from '../../controllers/event.controller';

export default {
  queries: {
    oneEvent: EventController.findOne,
    allEvents: EventController.findAll,
    searchEvents: EventController.search,
  },
  mutations: {
    createEvent: EventController.create,
    updateEvent: EventController.update,
    subscribeEvent: EventController.subscribe,
    unsubscribeEvent: EventController.unsubscribe,
    aproveArtist: EventController.aprove,
    reproveArtist: EventController.reprove,
    resetSubscriptionEvent: EventController.resetSubscription,
  },
};
