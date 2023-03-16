import { NextFunction, Request, Response } from 'express';
import IrService from '@services/ir.service';

class irController {
  public IrService = new IrService();

  public getIrCount = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data: any;

      data = await this.IrService.getIrCount();

      res.setHeader('getIrCount', '');
      res.status(200).json({ data: data, message: 'getIrCount' });
    } catch (error) {
      next(error);
    }
  };

  public getIrList = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data: any;

      data = await this.IrService.getIrList(JSON.parse(req.query.size.toString()));

      res.setHeader('getIrList', '');
      res.status(200).json({ data: data, message: 'getIrList' });
    } catch (error) {
      next(error);
    }
  };

  public getIrObject = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data: any;

      data = await this.IrService.getIrObject(JSON.parse(req.query.no.toString()));

      res.setHeader('getIrObject', '');
      res.status(200).json({ data: data, message: 'getIrObject' });
    } catch (error) {
      next(error);
    }
  };

  public getIrDelete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data: any;

      data = await this.IrService.getIrDelete(req.query.no.toString());

      res.setHeader('getIrDelete', '');
      res.status(200).json({ data: data, message: 'getIrDelete' });
    } catch (error) {
      next(error);
    }
  };
}

export default irController;
