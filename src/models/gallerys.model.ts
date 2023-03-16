import { model, Schema, Document } from 'mongoose';
import { GallerysInterface } from '@interfaces/gallerys.interface';

const gallerysSchema: Schema = new Schema({
  no: { default: 0, type: Number },
  title: { default: '', type: String },
  thumbnail: { default: '', type: String },
  content: { default: '', type: String },
  createdAt: { default: 0, type: Number }
}, {versionKey:false});

const gallerysModel = model<GallerysInterface & Document>('gallerys', gallerysSchema, 'gallerys');

export default gallerysModel;
