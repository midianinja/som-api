/* eslint-disable no-console */
import mongoose from 'mongoose';

import acessibilityOptions from './schemas/acessibilityOptions.model';
import categoryOptions from './schemas/categoryOptions.model';
import musicalStyleOptions from './schemas/musicalStyleOptions.model';
import spaceCapacityOptions from './schemas/spaceCapacityOptions.model';
import productors from './schemas/productors.model';
import artists from './schemas/artists.model';
import users from './schemas/users.model';
import events from './schemas/events.model';
import locations from './schemas/locations.model';
import songs from './schemas/songs.model';
import countries from './schemas/country.model';
import states from './schemas/state.model';
import cities from './schemas/city.model';

export default async ({ conn, mongoUrl = 'mongodb://localhost/som-local' }) => {
  console.log('mongoUrl:', mongoUrl);
  try {
    if (!conn) {
      console.log('=> using new database connection');

      const newConnection = await mongoose.createConnection(mongoUrl, {
        bufferCommands: false,
        bufferMaxEntries: 0,
        keepAlive: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,

      });
      newConnection.model('acessibilityOptions', acessibilityOptions);
      newConnection.model('categoryOptions', categoryOptions);
      newConnection.model('musicalStyleOptions', musicalStyleOptions);
      newConnection.model('spaceCapacityOptions', spaceCapacityOptions);
      newConnection.model('productors', productors);
      newConnection.model('artists', artists);
      newConnection.model('users', users);
      newConnection.model('events', events);
      newConnection.model('locations', locations);
      newConnection.model('songs', songs);
      newConnection.model('countries', countries);
      newConnection.model('states', states);
      newConnection.model('cities', cities);
      return newConnection;
    }
    console.log('=> using existing database connection');
    return conn;
  } catch (err) {
    throw err;
  }
};
