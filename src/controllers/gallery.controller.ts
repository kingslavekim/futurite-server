import { NextFunction, Request, Response } from 'express';
import GalleryService from '@services/gallery.service';

class galleryController {
  public GalleryService = new GalleryService();

  public getGalleryCount = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data: any;

      data = await this.GalleryService.getGalleryCount();

      res.setHeader('getGalleryCount', '');
      res.status(200).json({ data: data, message: 'getGalleryCount' });
    } catch (error) {
      next(error);
    }
  };

  public getGalleryList = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data: any;

      data = await this.GalleryService.getGalleryList(JSON.parse(req.query.size.toString()));

      res.setHeader('getGalleryList', '');
      res.status(200).json({ data: data, message: 'getGalleryList' });
    } catch (error) {
      next(error);
    }
  };

  public getGalleryObject = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data: any;

      data = await this.GalleryService.getGalleryObject(JSON.parse(req.query.no.toString()));

      res.setHeader('getGalleryObject', '');
      res.status(200).json({ data: data, message: 'getGalleryObject' });
    } catch (error) {
      next(error);
    }
  };

  public getGalleryDelete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data: any;

      data = await this.GalleryService.getGalleryDelete(req.query.no.toString());

      res.setHeader('getGalleryDelete', '');
      res.status(200).json({ data: data, message: 'getGalleryDelete' });
    } catch (error) {
      next(error);
    }
  };
}

export default galleryController;
