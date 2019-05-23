import acessibilityQuery from './acessibility.query';
import artistQuery from './artist.query';
import categoryQuery from './category.query';
import musicalStyleQuery from './musicalStyle.query';
import productorQuery from './productor.query';
import spaceCapacityQuery from './spaceCapacity.query';
import userQuery from './user.query';

export default `
  type Query {
    ${acessibilityQuery}
    ${artistQuery}
    ${categoryQuery}
    ${musicalStyleQuery}
    ${productorQuery}
    ${spaceCapacityQuery}
    ${userQuery}
  }
`;
