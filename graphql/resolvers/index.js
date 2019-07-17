import acessibilityOption from './acessibilityOption.resolver';
import categoryOption from './categoryOption.resolver';
import musicalStyleOption from './musicalStyleOption.resolver';
import spaceCapacityOption from './spaceCapacityOption.resolver';
import productor from './productor.resolver';
import artist from './artist.resolver';
import user from './user.resolver';
import database from './database.resolver';
import song from './song.resolver';

export default {
  Query: {
    ...acessibilityOption.queries,
    ...categoryOption.queries,
    ...musicalStyleOption.queries,
    ...spaceCapacityOption.queries,
    ...productor.queries,
    ...artist.queries,
    ...user.queries,
    ...song.queries,
  },
  Mutation: {
    ...acessibilityOption.mutations,
    ...categoryOption.mutations,
    ...musicalStyleOption.mutations,
    ...spaceCapacityOption.mutations,
    ...productor.mutations,
    ...artist.mutations,
    ...user.mutations,
    ...database.mutations,
    ...song.mutations,
  },
};
