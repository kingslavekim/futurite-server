import { Router } from 'express';
import adminController from '@controllers/admin.controller';
import { Routes } from '@interfaces/routes.interface';
import config from "config";
const multer = require('multer');
const path = require('path');

class AdminRoute implements Routes {
  public router = Router();
  public adminController = new adminController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    const upload = multer({
      storage: multer.diskStorage({
        destination(req, file, cb) {
          cb(null, config.get('UPLOAD_URL'));
        },

        filename(req, file, cb) {
          const ext = path.extname(file.originalname);
          console.log('file.originalname', file.originalname);
          cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
      }),
    });

    this.router.post(`/api/uploadFiles`, upload.single('img'), (req: any, res) => {
      const IMG_URL = `/uploads/${req.file.filename}`;
      res.json({ url: IMG_URL });
    });
    this.router.get(`/api/getAdminCreate`, this.adminController.getAdminCreate);
  }
}

export default AdminRoute;
