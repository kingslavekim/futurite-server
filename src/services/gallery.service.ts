import gallerysModel from '@models/gallerys.model';

class GalleryService {
  public gallerys = gallerysModel;

  public async getGalleryCount(): Promise<any> {
    let getData: any = 0;

    getData = await this.gallerys
        .find({})
        .countDocuments();

    return getData;
  }

  public async getGalleryList(size: any): Promise<any> {
    const resultData = [];
    let dataList: any;

    dataList = await this.gallerys.find({}) .sort({createdAt:-1}) .limit(size.end) .skip(size.start);

    for (const data of dataList) {
      resultData.push(data._doc);
    }

    return resultData;
  }

  public async getGalleryObject(no: string): Promise<any> {
    const resultObject: any = {};
    let dataList: any;

    dataList = await this.gallerys.findOne({ no: Number(no) });
    resultObject._id = dataList._doc._id.toString();
    resultObject.no = dataList._doc.no;
    resultObject.title = dataList._doc.title;
    resultObject.thumbnail = dataList._doc.thumbnail;
    resultObject.content = dataList._doc.content;
    resultObject.createdAt = dataList._doc.createdAt;

    return resultObject;
  }

  public async getGalleryDelete(no: string): Promise<any> {
    await this.gallerys.deleteOne({ no: Number(no) });
  }
}

export default GalleryService;
