import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const artistModel = new Schema({
  user: { type: ObjectId, ref: 'users' },
  name: { type: String, required: true },
  members_number: { type: Number, default: 1 },
  avatar: { type: String, default: '' },
  
  description: { type: String, default: '' },
  hometown: { type: String, default: '' },
  city: { type: String, default: '' },
  google_id: { type: String, default: '' },
  twitter_id: { type: String, default: '' },
  instagram_id: { type: String, default: '' },
  spotify_id: { type: String, default: '' },
  facebook_id: { type: String, default: '' },
  approved_events: [{ type: ObjectId, ref: 'events' }],
  subscribed_events: [{ type: ObjectId, ref: 'events' }],
  recused_events: [{ type: ObjectId, ref: 'events' }],
  musical_genres: [{ type: ObjectId, ref: 'musicalStyleOptions' }],
  category: { type: ObjectId, ref: 'categoryOptions' },
}, {
  usePushEach: true,
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default artistModel;
