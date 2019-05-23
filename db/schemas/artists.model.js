import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const artistModel = new Schema({
  user: { type: ObjectId, ref: 'users' },
  name: { type: String, required: true },
  description: { type: String, default: '' },
  hometown: { type: String, default: '' },
  number_members: { type: Number, default: 1 },
  google_id: { type: String, default: '' },
  twitter_id: { type: String, default: '' },
  instagram_id: { type: String, default: '' },
  spotify_id: { type: String, default: '' },
  facebook_id: { type: String, default: '' },
  participated_events: [{ type: ObjectId, ref: 'events' }],
  subscribed_events: [{ type: ObjectId, ref: 'events' }],
  openeds_events: [{ type: ObjectId, ref: 'events' }],
  musical_genres: [{ type: ObjectId, ref: 'musical_genres' }],
}, {
  usePushEach: true,
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default artistModel;
