export default `
  oneMusicalStyle( 
    id: ID
  ): MusicalStyle

  allMusicalStyles( 
    musicalStyle: MusicalStyleInput
    paginator: PaginatorInput
  ): [MusicalStyle]
`;
