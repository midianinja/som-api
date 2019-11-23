import acessibilityOptionMutation from './acessibilityOption.mutation';
import artistMutation from './artist.mutation';
import categoryOptionMutation from './categoryOption.mutation';
import databaseMutation from './database.mutation';
import eventMutation from './event.mutation';
import musicalStyleOptionMutation from './musicalStyleOption.mutation';
import productorMutation from './productor.mutation';
import spaceCapacityOptionMutation from './spaceCapacityOption.mutation';
import userMutation from './user.mutation';
import songMutation from './song.mutation';
import countryMutation from './country.mutation';
import cityMutation from './city.mutation';
import stateMutation from './state.mutation';

export default `
  type Mutation {
    ${acessibilityOptionMutation}
    ${categoryOptionMutation}
    ${musicalStyleOptionMutation}
    ${spaceCapacityOptionMutation}
    ${songMutation}
    ${countryMutation}
    ${cityMutation}
    ${stateMutation}

    ${productorMutation}
    ${artistMutation}
    ${userMutation}
    ${databaseMutation}
    ${eventMutation}
  }
`;
