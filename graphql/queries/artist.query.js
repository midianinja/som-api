export default `
  oneArtist( 
    artist: ArtistInput
  ): Artist

  allArtists( 
    artist: ArtistInput
    paginator: PaginatorInput
  ): [Artist]
`;
