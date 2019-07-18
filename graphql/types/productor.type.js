export default `
  type Productor {
    id: ID
    user: User
    photo: String
    name: String
    description: String
    location: Location
    followers: [User]
    following: [Artist]
    events: [Event]
  }

  input ProductorInput {
    id: ID
    photo: String
    user: ID
    name: String
    description: String
    location: ID
    followers: [ID]
    following: [ID]
    events: [ID]
  }
`;
