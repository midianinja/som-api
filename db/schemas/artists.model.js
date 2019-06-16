import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

ObjectId.prototype.valueOf = () => this.toString();

const artistModel = new Schema({
  user: { type: ObjectId, ref: 'users' },
  name: { type: String, required: true },
  members_number: { type: Number, default: 1 },
  avatar_image: { type: String, default: '' },
  about: { type: String, default: '' },
  country: { type: String, default: '' },
  state: { type: String, default: '' },
  city: { type: String, default: '' },
  musical_styles: [{ type: ObjectId, ref: 'musicalStyleOptions' }],

  hometown: { type: String, default: '' },
  google_id: { type: String, default: '' },
  twitter_id: { type: String, default: '' },
  instagram_id: { type: String, default: '' },
  spotify_id: { type: String, default: '' },
  facebook_id: { type: String, default: '' },
  approved_events: [{ type: ObjectId, ref: 'events' }],
  subscribed_events: [{ type: ObjectId, ref: 'events' }],
  recused_events: [{ type: ObjectId, ref: 'events' }],
  category: { type: ObjectId, ref: 'categoryOptions' },
}, {
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default artistModel;
