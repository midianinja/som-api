import ArtistController from '../../controllers/artist.controller';

export default {
  queries: {
    oneArtist: ArtistController.findOne,
    allArtists: ArtistController.findAll,
  },
  mutations: {
    createArtist: ArtistController.create,
    updateArtist: ArtistController.update,
  },
};
