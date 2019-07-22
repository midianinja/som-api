export default `
  createEvent(
    event: EventInput!
  ): Event
  updateEvent(
    id: ID!
    event: EventInput!
  ): Event
  subscribeEvent(
    id: ID!,
    artistID: ID!,
  ): Event
  unsubscribeEvent(
    id: ID!,
    artistID: ID!,
  ): Event
`;
