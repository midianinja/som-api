import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const eventsModel = new Schema({
  productor: { type: ObjectId, ref: 'productors' },
  artists: [{ type: ObjectId, ref: 'artists' }],
  subscribers: [{ type: ObjectId, ref: 'artists' }],
  location: { type: ObjectId, ref: 'locations' },
  name: { type: String, default: '' },
  site: { type: String, default: '' },
  oportunities: { type: String, default: '' },
  event_date: { type: Date, default: '' },
  has_accommodation: { type: Boolean, default: false },
  has_food: { type: Boolean, default: false },
  has_local_transportation: { type: Boolean, default: false },
  has_city_transportation: { type: Boolean, default: false },
  has_interstate_transportation: { type: Boolean, default: false },

  musical_genres: [{ type: ObjectId, ref: 'musical_genres' }],
}, {
  usePushEach: true,
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default eventsModel;
