export default `
    type Productor {
        user: User
        name: String
        description: String
        hometown: String
        google_id: String
        twitter_id: String
        instagram_id: String
        spotify_id: String
        facebook_id: String
        events: [Event]
    }
    input ProductorInput {
        user: String
        name: String
        description: String
        hometown: String
        google_id: String
        twitter_id: String
        instagram_id: String
        spotify_id: String
        facebook_id: String
        events: [String]
    }
`;
