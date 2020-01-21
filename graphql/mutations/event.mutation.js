export default `
  createEvent(
    event: EventInput!
  ): Event
  updateEvent(
    id: String!
    event: EventInput!
  ): Event
  subscribeEvent(
    id: String!,
    artistID: String!,
  ): Event
  unsubscribeEvent(
    id: String!,
    artistID: String!,
  ): Event
`;
