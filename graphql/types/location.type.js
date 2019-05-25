export default `
  type Location {
    id: ID!
    address: String
    complement: String
    district: String
    city: String
    number: String
    zipcode: String
    state: String
    place_id: String
    geometry: JSON
  }
  
  input LocationInput {
    id: ID
    address: String!
    complement: String
    district: String
    city: String!
    number: String
    zipcode: String!
    state: String!
    place_id: String
    geometry: JSON
  }
`;
