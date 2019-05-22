import artistType from './artist.type';
import productorType from './productor.type';
import userType from './user.type';

export default `
  scalar JSON
  
  ${artistType}
  ${productorType}
  ${userType}
`;
