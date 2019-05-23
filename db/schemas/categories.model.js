
import { Schema } from 'mongoose';

const musicalStylesModel = new Schema({
  label: { type: String, required: true, unique: true },
}, { timestamps: { updatedAt: 'updated_at', createdAt: 'created_at' } });

export default musicalStylesModel;
