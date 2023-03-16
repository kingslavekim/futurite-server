import { model, Schema, Document } from 'mongoose';
import { IrsInterface } from '@interfaces/irs.interface';

const irsSchema: Schema = new Schema({
  no: { default: 0, type: Number },
  title: { default: '', type: String },
  content: { default: '', type: String },
  createdAt: { default: 0, type: Number }
}, {versionKey:false});

const irsModel = model<IrsInterface & Document>('irs', irsSchema, 'irs');

export default irsModel;
