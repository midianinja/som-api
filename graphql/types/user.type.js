export default `

  type User {
    _id: ID
    ida: String
    type: String
    productor: [Productor]
    artist: [Artist]
    likes: [User]
  }
  
  input UserInput {
    _id: ID
    ida: String
    type: String
    productor: [String]
    artist: [String]
    likes: [String]
  }
`;
