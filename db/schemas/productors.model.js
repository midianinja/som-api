import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const productModel = Schema({
  user: { type: ObjectId, ref: 'users' },
  name: { type: String, required: true },
  description: { type: String, default: '' },
  hometown: { type: String, default: '' },
  google_id: { type: String, default: '' },
  twitter_id: { type: String, default: '' },
  instagram_id: { type: String, default: '' },
  spotify_id: { type: String, default: '' },
  facebook_id: { type: String, default: '' },
  events: [{ type: ObjectId, ref: 'events' }],
}, {
  usePushEach: true,
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default productModel;
