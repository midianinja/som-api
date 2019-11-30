export default `
  oneArtist( 
    id: ID!
  ): Artist

  allArtists( 
    artist: ArtistInput
    paginator: PaginatorInput
  ): [Artist]
`;
