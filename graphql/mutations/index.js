import acessibilityOptionMutation from './acessibilityOption.mutation';
import categoryOptionMutation from './categoryOption.mutation';
import musicalStyleOptionMutation from './musicalStyleOption.mutation';
import spaceCapacityOptionMutation from './spaceCapacityOption.mutation';
import productorMutation from './productor.mutation';
import artistMutation from './artist.mutation';
import userMutation from './user.mutation';
import databaseMutation from './database.mutation';
import songMutation from './song.mutation';

export default `
  type Mutation {
    ${acessibilityOptionMutation}
    ${categoryOptionMutation}
    ${musicalStyleOptionMutation}
    ${spaceCapacityOptionMutation}
    ${songMutation}

    ${productorMutation}
    ${artistMutation}
    ${userMutation}
    ${databaseMutation}
  }
`;
