export default `
  type Artist {
    id: ID
    user: User
    name: String
    members_number: Int
    hometown: String
    city: String
    category: CategoryOption

    approved_events: [Event]
    subscribed_events: [Event]
    recused_events: [Event]
    musical_genres: [Event]

    google_id: String
    twitter_id: String
    instagram_id: String
    spotify_id: String
    facebook_id: String
  }
  
  input ArtistInput {
    id: ID
    user: String
    name: String
    members_number: Int
    hometown: String
    city: String
    category: ID
    
    approved_events: [String]
    subscribed_events: [String]
    recused_events: [String]
    musical_genres: [String]

    google_id: String
    twitter_id: String
    instagram_id: String
    spotify_id: String
    facebook_id: String
  }
`;
