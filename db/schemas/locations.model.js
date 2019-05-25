import { Schema } from 'mongoose';

const locationModel = new Schema({
  address: { type: String, required: true },
  complement: { type: String, default: '' },
  district: { type: String, required: true },
  city: { type: String, required: true },
  number: { type: String },
  zipcode: { type: String, required: true },
  state: { type: String, required: true },
  geometry: { type: Object, required: true },
  place_id: { type: String },
}, {
  usePushEach: true,
  timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' },
});

export default locationModel;
