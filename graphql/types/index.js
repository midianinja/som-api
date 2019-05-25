import artistType from './artist.type';
import productorType from './productor.type';
import userType from './user.type';
import acessibilityOptionType from './acessibilityOption.type';
import categoryOptionType from './categoryOption.type';
import musicalStyleOptionType from './musicalStyleOption.type';
import spaceCapacityOptionType from './spaceCapacityOption.type';
import paginatorType from './paginator.type';
import locationType from './location.type';
import eventType from './event.type';

export default `
  scalar JSON
  
  ${artistType}
  ${productorType}
  ${userType}
  ${locationType}
  ${eventType}

  ${acessibilityOptionType}
  ${categoryOptionType}
  ${musicalStyleOptionType}
  ${spaceCapacityOptionType}

  ${paginatorType}
`;
