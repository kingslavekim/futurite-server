import noticesModel from '@models/notices.model';

class NoticeService {
  public notices = noticesModel;

  public async getNoticeCount(): Promise<any> {
    let getData: any = 0;

    getData = await this.notices
        .find({})
        .countDocuments();

    return getData;
  }

  public async getNoticeList(size: any): Promise<any> {
    const resultData = [];
    let dataList: any;

    dataList = await this.notices .find({}) .sort({createdAt:-1}) .limit(size.end) .skip(size.start);

    for (const data of dataList) {
      resultData.push(data._doc);
    }

    return resultData;
  }

  public async getMainNoticeList(size: any): Promise<any> {
    const resultData = [];
    let dataList: any;
    let rowCount = 5;

    dataList = await this.notices .find({}).sort({createdAt:-1}).limit(size.end);

    for (const data of dataList) {
      resultData.push(data._doc);
    }

    if (resultData.length < rowCount) {
      let rowLength = resultData.length;

      for (let i=0; i<rowCount - rowLength; i++) {
        resultData.push({})
      }
    }

    return resultData;
  }

  public async getNoticeObject(no: string): Promise<any> {
    const resultObject: any = {};
    let dataList: any;

    dataList = await this.notices.findOne({ no: Number(no) });
    resultObject._id = dataList._doc._id.toString();
    resultObject.no = dataList._doc.no;
    resultObject.title = dataList._doc.title;
    resultObject.content = dataList._doc.content;
    resultObject.createdAt = dataList._doc.createdAt;

    return resultObject;
  }

  public async getNoticeDelete(no: string): Promise<any> {
    await this.notices.deleteOne({ no: Number(no) });
  }
}

export default NoticeService;
