export default `
  type Artist {
    user: ID
    name: String
    description: String
    hometown: String
    number_members: Number
    google_id: String
    twitter_id: String
    instagram_id: String
    spotify_id: String
    facebook_id: String
    participated_events: Event
    subscribed_events: Event
    openeds_events: Event
    musical_genres: Generes
  }
  
  input ArtistInput {
    user: ID
    name: String
    description: String
    hometown: String
    number_members: Number
    google_id: String
    twitter_id: String
    instagram_id: String
    spotify_id: String
    facebook_id: String
    participated_events: [String]
    subscribed_events: [String]
    openeds_events: [String]
    musical_genres: [String]
  }
`;
