import mongoose from 'mongoose';

import acessibilities from './schemas/acessibilities.model';
import artists from './schemas/artists.model';
import categories from './schemas/categories.model';
import musicalStyle from './schemas/musicalStyles.model';
import productors from './schemas/productors.model';
import spaceCapacities from './schemas/spaceCapacity.model';
import users from './schemas/users.model';

export default class MongoDB {
  init({ mongoUrl = 'mongodb://localhost/aceOne-local' }) {
    try {
      const db = mongoose.createConnection(mongoUrl);
      this.Acessibilities = db.model('acessibilities', acessibilities);
      this.Artists = db.model('artists', artists);
      this.Categories = db.model('categories', categories);
      this.mMsicalStyle = db.model('musicalStyle', musicalStyle);
      this.Productors = db.model('productors', productors);
      this.SpaceCapacities = db.model('spaceCapacities', spaceCapacities);
      this.Users = db.model('users', users);
    } catch (err) {
      throw err;
    }
  }
}
