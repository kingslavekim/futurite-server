export interface NoticesInterface {
  no: number;
  usage: boolean;
  categoryId: string;
  writer: object;
  title: string;
  content: string;
  lookupCount: number;
  isAttachImage: boolean;
  isAttachVideo: boolean;
  createdAt: number;
}
