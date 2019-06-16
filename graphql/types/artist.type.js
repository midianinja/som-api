export default `
  type Artist {
    id: ID
    name: String
    members_number: Int
    avatar_image: String
    about: String
    country: String
    state: String
    city: String
    musical_styles: [MusicalStyleOption]

    
    hometown: String
    category: CategoryOption

    approved_events: [Event]
    subscribed_events: [Event]
    recused_events: [Event]
    google_id: String
    twitter_id: String
    instagram_id: String
    spotify_id: String
    facebook_id: String
  }
  
  input ArtistInput {
    id: ID
    name: String
    members_number: Int
    avatar_image: String
    about: String
    country: String
    state: String
    city: String
    musical_styles: [String]
  }
`;
