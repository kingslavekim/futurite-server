import { NextFunction, Request, Response } from 'express';
import NoticeService from '@services/notice.service';

class noticeController {
  public NoticeService = new NoticeService();

  public getNoticeCount = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data: any;

      data = await this.NoticeService.getNoticeCount();

      res.setHeader('getNoticeCount', '');
      res.status(200).json({ data: data, message: 'getNoticeCount' });
    } catch (error) {
      next(error);
    }
  };

  public getNoticeList = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data: any;

      data = await this.NoticeService.getNoticeList(JSON.parse(req.query.size.toString()));

      res.setHeader('getNoticeList', '');
      res.status(200).json({ data: data, message: 'getNoticeList' });
    } catch (error) {
      next(error);
    }
  };

  public getMainNoticeList = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data: any;

      data = await this.NoticeService.getMainNoticeList(JSON.parse(req.query.size.toString()));

      res.setHeader('getMainNoticeList', '');
      res.status(200).json({ data: data, message: 'getMainNoticeList' });
    } catch (error) {
      next(error);
    }
  };

  public getNoticeObject = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data: any;

      data = await this.NoticeService.getNoticeObject(JSON.parse(req.query.no.toString()));

      res.setHeader('getNoticeObject', '');
      res.status(200).json({ data: data, message: 'getNoticeObject' });
    } catch (error) {
      next(error);
    }
  };

  public getNoticeDelete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data: any;

      data = await this.NoticeService.getNoticeDelete(req.query.no.toString());

      res.setHeader('getNoticeDelete', '');
      res.status(200).json({ data: data, message: 'getNoticeDelete' });
    } catch (error) {
      next(error);
    }
  };
}

export default noticeController;
