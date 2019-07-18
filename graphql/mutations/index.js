import acessibilityOptionMutation from './acessibilityOption.mutation';
import artistMutation from './artist.mutation';
import categoryOptionMutation from './categoryOption.mutation';
import databaseMutation from './database.mutation';
import eventMutation from './event.mutation';
import musicalStyleOptionMutation from './musicalStyleOption.mutation';
import productorMutation from './productor.mutation';
import spaceCapacityOptionMutation from './spaceCapacityOption.mutation';
import userMutation from './user.mutation';

export default `
  type Mutation {
    ${acessibilityOptionMutation}
    ${categoryOptionMutation}
    ${musicalStyleOptionMutation}
    ${spaceCapacityOptionMutation}

    ${productorMutation}
    ${artistMutation}
    ${userMutation}
    ${databaseMutation}
    ${eventMutation}
  }
`;
