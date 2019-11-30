export default `

  type ArtistFollow {
    user: User
    created_at: String
  }  

  type Artist {
    id: ID
    user: User
    name: String
    phone: String
    members_number: Int
    avatar_image: Image
    about: String
    country: String
    state: String
    city: String
    musical_styles: [MusicalStyleOption]
    facebook: String
    instagram: String
    twitter: String
    youtube: String
    hometown: String
    category: CategoryOption
    songs: [Song]
    approved_events: [Event]
    subscribed_events: [Event]
    recused_events: [Event]
    google_id: String
    stage_map: String
    tec_rider: String
    kit: String
    twitter_id: String
    instagram_id: String
    spotify_id: String
    facebook_id: String
    email: String
    follows: [ArtistFollow]
  }
  
  input ArtistInput {
    id: ID
    user: ID
    phone: String
    name: String
    members_number: Int
    avatar_image: ImageInput
    about: String
    country: String
    stage_map: String
    tec_rider: String
    kit: String
    state: String
    city: String
    songs: [String]
    musical_styles: [String]
    facebook: String
    instagram: String
    twitter: String
    youtube: String
    email: String
  }
`;
