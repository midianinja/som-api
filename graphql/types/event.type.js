export default `
  type Event {
    id: ID
    productor: Productor 
    artists: [Artist]
    subscribers: [Artist]
    location: Location
    
    name: String
    site: String
    oportunities: Int
    event_date: String
    
    has_accommodation: Boolean
    has_food: Boolean
    has_local_transportation: Boolean
    has_city_transportation: Boolean
    has_interstate_transportation: Boolean
  }
  
  input EventInput {
    id: ID
    productor: String 
    artists: [String]
    subscribers: [String]
    location: String
    
    name: String
    site: String
    oportunities: Int
    event_date: String
    
    has_accommodation: Boolean
    has_food: Boolean
    has_local_transportation: Boolean
    has_city_transportation: Boolean
    has_interstate_transportation: Boolean
  }
`;
