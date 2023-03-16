import { Router } from 'express';
import noticeController from '@controllers/notice.controller';
import { Routes } from '@interfaces/routes.interface';

class NoticeRoute implements Routes {
  public path = '/api/';
  public router = Router();
  public noticeController = new noticeController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}getNoticeCount`, this.noticeController.getNoticeCount);
    this.router.get(`${this.path}getNoticeList`, this.noticeController.getNoticeList);
    this.router.get(`${this.path}getMainNoticeList`, this.noticeController.getMainNoticeList);
    this.router.get(`${this.path}getNoticeObject`, this.noticeController.getNoticeObject);
    this.router.get(`${this.path}getNoticeDelete`, this.noticeController.getNoticeDelete);
  }
}

export default NoticeRoute;
