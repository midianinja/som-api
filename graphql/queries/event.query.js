export default `
  oneEvent( 
    id: ID
  ): Event

  allEvents( 
    event: EventInput
    paginator: PaginatorInput
  ): [Event]
`;
