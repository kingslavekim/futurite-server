import { model, Schema, Document } from 'mongoose';
import { NoticesInterface } from '@interfaces/notices.interface';

const noticesSchema: Schema = new Schema({
  no: { default: 0, type: Number },
  title: { default: '', type: String },
  content: { default: '', type: String },
  createdAt: { default: 0, type: Number }
}, {versionKey:false});

const noticesModel = model<NoticesInterface & Document>('notices', noticesSchema, 'notices');

export default noticesModel;
