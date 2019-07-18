import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const productModel = Schema({
  user: { type: ObjectId, ref: 'users' },
  photo: { type: String, default: '' },
  name: { type: String, defualt: '' },
  description: { type: String, default: '' },
  location: { type: ObjectId, ref: 'locations' },
  followers: [{ type: ObjectId, ref: 'users' }],
  following: [{ type: ObjectId, ref: 'artists' }],
  events: [{ type: ObjectId, ref: 'events' }],
}, {
  usePushEach: true,
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default productModel;
