export default `

  type User {
    id: ID
    ida: String!
    type: String
    email: String
    productor: [Productor]
    artist: [Artist]
    likes: [User]
  }
  
  input UserInput {
    id: ID
    ida: String!
    email: String
    type: String
    productor: [String]
    artist: [String]
    likes: [String]
  }
`;
