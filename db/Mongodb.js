import mongoose from 'mongoose';

import users from './schemas/user.model';
import artists from './schemas/artist.model';
import productors from './schemas/productor.model';

export default class MongoDB {
  init({ mongoUrl = 'mongodb://localhost/aceOne-local' }) {
    try {
      const db = mongoose.createConnection(mongoUrl);
      this.Users = db.model('users', users);
      this.Productor = db.model('productors', productors);
      this.Artists = db.model('artists', artists);
    } catch (err) {
      throw err;
    }
  }
}
