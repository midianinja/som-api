import acessibilityMutation from './acessibility.mutation';
import artistMutation from './artist.mutation';
import categoryMutation from './category.mutation';
import musicalStyleMutation from './musicalStyle.mutation';
import productorMutation from './productor.mutation';
import spaceCapacityMutation from './spaceCapacity.mutation';
import userMutation from './user.mutation';

export default `
  type Mutation {
    ${acessibilityMutation}
    ${artistMutation}
    ${categoryMutation}
    ${musicalStyleMutation}
    ${productorMutation}
    ${spaceCapacityMutation}
    ${userMutation}
  }
`;
