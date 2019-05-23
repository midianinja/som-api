// instruments: [Instrument]
// participated_events: Event
// type: ArtistCategory
// subscribed_events: Event
// openeds_events: Event
export default `
  type Artist {
    user: User
    name: String
    members_number: Int
    hometown: String
    city: String
    musical_style: MusicalStyle
    

    google_id: String
    twitter_id: String
    instagram_id: String
    spotify_id: String
    facebook_id: String
  }
  
  input ArtistInput {
    user: ID
    name: String
    members_number: Int
    hometown: String
    city: String
    musical_style: ID
    instruments: [ID]
    type: ID
    
    participated_events: [ID]
    subscribed_events: [ID]
    openeds_events: [ID]

    google_id: String
    twitter_id: String
    instagram_id: String
    spotify_id: String
    facebook_id: String
  }
`;
