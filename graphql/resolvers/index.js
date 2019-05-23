import acessibility from './acessibility.resolver';
import artist from './artist.resolver';
import category from './category.resolver';
import musicalStyle from './musicalStyle.resolver';
import productor from './productor.resolver';
import spaceCapacity from './spaceCapacity.resolver';
import user from './user.resolver';

export default {
  Query: {
    ...acessibility.queries,
    ...artist.queries,
    ...category.queries,
    ...musicalStyle.queries,
    ...productor.queries,
    ...spaceCapacity.queries,
    ...user.queries,
  },
  Mutation: {
    ...acessibility.mutations,
    ...artist.mutations,
    ...category.mutations,
    ...musicalStyle.mutations,
    ...productor.mutations,
    ...spaceCapacity.mutations,
    ...user.mutations,
  },
};
