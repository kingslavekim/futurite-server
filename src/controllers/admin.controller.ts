import { NextFunction, Request, Response } from 'express';
import AdminService from '@services/admin.service';

class adminController {
  public AdminService = new AdminService();

  public getAdminCreate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data: any;

      data = await this.AdminService.getAdminCreate(req.query.category.toString(), req.query.title.toString(), req.query.content.toString());

      res.setHeader('getAdminCreate', '');
      res.status(200).json({ data: data, message: 'getAdminCreate' });
    } catch (error) {
      next(error);
    }
  };

}

export default adminController;
