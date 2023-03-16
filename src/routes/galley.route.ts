import { Router } from 'express';
import galleryController from '@controllers/gallery.controller';
import { Routes } from '@interfaces/routes.interface';

class GalleryRoute implements Routes {
  public path = '/api/';
  public router = Router();
  public galleryController = new galleryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}getGalleryCount`, this.galleryController.getGalleryCount);
    this.router.get(`${this.path}getGalleryList`, this.galleryController.getGalleryList);
    this.router.get(`${this.path}getGalleryObject`, this.galleryController.getGalleryObject);
    this.router.get(`${this.path}getGalleryDelete`, this.galleryController.getGalleryDelete);
  }
}

export default GalleryRoute;
