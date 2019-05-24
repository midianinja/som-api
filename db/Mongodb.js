import mongoose from 'mongoose';

import acessibilityOptions from './schemas/acessibilityOptions.model';
import categoryOptions from './schemas/categoryOptions.model';
import musicalStyleOptions from './schemas/musicalStyleOptions.model';
import spaceCapacityOptions from './schemas/spaceCapacityOptions.model';
import productors from './schemas/productors.model';
import artists from './schemas/artists.model';
import users from './schemas/users.model';

export default class MongoDB {
  init({ mongoUrl = 'mongodb://localhost/aceOne-local' }) {
    try {
      const db = mongoose.createConnection(mongoUrl);
      this.AcessibilityOptions = db.model('acessibilityOptions', acessibilityOptions);
      this.CategoryOptions = db.model('categoryOptions', categoryOptions);
      this.MusicalStyleOptions = db.model('musicalStyleOptions', musicalStyleOptions);
      this.SpaceCapacityOptions = db.model('spaceCapacityOptions', spaceCapacityOptions);
      this.Productors = db.model('productors', productors);
      this.Artists = db.model('artists', artists);
      this.Users = db.model('users', users);
    } catch (err) {
      throw err;
    }
  }
}
