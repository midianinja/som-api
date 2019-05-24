// space_capacity: SpaceCapacity
// has_show_house: Boolean
// events: [Event]
export default `
  type Productor {
    user: User
    name: String
    hometown: String
    city: String
    producer_time: String
    site_link: String
    facebook_page_link: String

    google_id: String
    twitter_id: String
    instagram_id: String
    spotify_id: String
    facebook_id: String
  }

  input ProductorInput {
    user: ID
    name: String
    hometown: String
    city: String
    producer_time: String
    site_link: String
    facebook_page_link: String

    google_id: String
    twitter_id: String
    instagram_id: String
    spotify_id: String
    facebook_id: String
  }
`;
