export default `
  type Event {
    id: ID
    productor: Productor 
    approved_artists: [Artist]
    subscribers: [Artist]
    location: Location
    about: String
    
    name: String
    cover: String
    photo: String
    site: String
    oportunities: Int
    event_date: String
    subscribe_closing_date: String
    
    has_accommodation: Boolean
    has_food: Boolean
    has_local_transportation: Boolean
    has_city_transportation: Boolean
    has_money_paid: Boolean
    has_interstate_transportation: Boolean
    has_international_transportation: Boolean
  }
  
  input EventInput {
    productor: String 
    approved_artists: [String]
    subscribers: [String]
    location: String
    
    name: String
    about: String
    site: String
    photo: String
    cover: String
    oportunities: Int
    event_date: String
    subscribe_closing_date: String
    
    has_accommodation: Boolean
    has_food: Boolean
    has_local_transportation: Boolean
    has_city_transportation: Boolean
    has_money_paid: Boolean
    has_interstate_transportation: Boolean
    has_international_transportation: Boolean
  }
`;
