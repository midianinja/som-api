import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

const userModel = new Schema({
  ida: { type: String, unique: true, required: true },
  type: { type: String, default: 'commun' },
  productor: { type: ObjectId, ref: 'productors' },
  artist: { type: ObjectId, ref: 'artists' },
  likes: [{ type: ObjectId, ref: 'users' }],
}, {
  usePushEach: true,
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default userModel;
