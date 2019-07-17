// models
import acessibilityOptionQuery from './acessibilityOption.query';
import categoryOptionQuery from './categoryOption.query';
import musicalStyleOptionQuery from './musicalStyleOption.query';
import spaceCapacityOptionQuery from './spaceCapacityOption.query';
// entities
import productorQuery from './productor.query';
import artistQuery from './artist.query';
import userQuery from './user.query';
import songQuery from './song.query';

export default `
  type Query {
    ${acessibilityOptionQuery}
    ${categoryOptionQuery}
    ${musicalStyleOptionQuery}
    ${spaceCapacityOptionQuery}
    
    ${productorQuery}
    ${artistQuery}
    ${userQuery}
    ${songQuery}
  }
`;
