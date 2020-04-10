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
  aproveArtist(
    event_id: String!,
    artist_id: String!,
  ): Event
  reproveArtist(
    event_id: String!,
    artist_id: String!,
  ): Event
  resetSubscriptionEvent(
    event_id: String!,
    artist_id: String!,
  ): Event
`;
