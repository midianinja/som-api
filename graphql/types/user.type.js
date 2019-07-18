export default `

  type User {
    id: ID
    ida: String!
    type: String
    productor: Productor
    artist: [Artist]
    likes: [User]
  }
  
  input UserInput {
    id: ID
    ida: String!
    type: String
    productor: String
    artists: [String]
    likes: [String]
  }
`;
