export default `
  type Productor {
    id: ID
    user: User
    photo: String
    name: String
    cpf: String
    cnpj: String
    description: String
    location: Location
    followers: [User]
    following: [Artist]
    musical_styles: [MusicalStyleOption]
    events: [Event]
    status: String
  }

  input ProductorInput {
    description: String
    events: [ID]
    cpf: String
    cnpj: String
    followers: [ID]
    following: [ID]
    id: ID
    location: ID
    musical_styles: [String]
    name: String
    photo: String
    user: ID
    status: String
  }
`;
