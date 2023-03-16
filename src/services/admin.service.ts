import irsModel from '@models/irs.model';
import noticesModel from '@models/notices.model';
import gallerysModel from '@models/gallerys.model';

class AdminService {
  public notices = noticesModel;
  public irs = irsModel;
  public gallerys = gallerysModel;

  public async getAdminCreate(category: string, title: string, content: string): Promise<any> {
    let resultObject: any = {};

    resultObject.category = category;
    resultObject.title = title;
    resultObject.content = content;
    resultObject.createdAt = new Date().getTime();
    let count = 0;

    if (category === 'notice') {
      count = await this.notices.find({}).countDocuments();
      resultObject.no = count + 1;

      await this.notices.create(resultObject);
    } else if (category === 'ir') {
      count = await this.irs.find({}).countDocuments();
      resultObject.no = count + 1;

      await this.irs.create(resultObject);
    } else if (category === 'gallery') {
      count = await this.gallerys.find({}).countDocuments();
      resultObject.no = count + 1;

      await this.gallerys.create(resultObject);
    }

  }

}

export default AdminService;
