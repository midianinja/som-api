import artistType from './artist.type';
import productorType from './productor.type';
import userType from './user.type';
import acessibilityType from './acessibility.type';
import categoryType from './category.type';
import musicalStyleType from './musicalStyle.type';
import spaceCapacityType from './spaceCapacity.type';
import paginatorType from './paginator.type';

export default `
  scalar JSON
  
  ${artistType}
  ${productorType}
  ${userType}
  ${acessibilityType}
  ${categoryType}
  ${musicalStyleType}
  ${spaceCapacityType}
  ${paginatorType}
`;
