export default `
  oneCategory( 
    id: ID
  ): Category

  allCategories( 
    category: CategoryInput
    paginator: PaginatorInput
  ): [Category]
`;
