import { model, Schema, Document } from 'mongoose';
import { NoticeInterface } from '@interfaces/notice.interface';

const noticeSchema: Schema = new Schema({
  no: { default: 0, type: Number },
  usage: { default: true, type: Boolean },
  title: { default: '', type: String },
  content: { default: '', type: String },
  createdAt: { default: 0, type: Number }
}, {versionKey:false});

const noticeModel = model<NoticeInterface & Document>('futurite-notice', noticeSchema, 'futurite-notice');

export default noticeModel;
