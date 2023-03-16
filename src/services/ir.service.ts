import irsModel from '@models/irs.model';

class IrService {
  public irs = irsModel;

  public async getIrCount(): Promise<any> {
    let getData: any = 0;

    getData = await this.irs
        .find({})
        .countDocuments();

    return getData;
  }

  public async getIrList(size: any): Promise<any> {
    const resultData = [];
    let dataList: any;

    dataList = await this.irs .find({}) .sort({createdAt:-1}) .limit(size.end) .skip(size.start);

    for (const data of dataList) {
      resultData.push(data._doc);
    }

    return resultData;
  }

  public async getIrObject(no: string): Promise<any> {
    const resultObject: any = {};
    let dataList: any;

    dataList = await this.irs.findOne({ no: Number(no) });
    resultObject._id = dataList._doc._id.toString();
    resultObject.no = dataList._doc.no;
    resultObject.title = dataList._doc.title;
    resultObject.content = dataList._doc.content;
    resultObject.createdAt = dataList._doc.createdAt;

    return resultObject;
  }

  public async getIrDelete(no: string): Promise<any> {
    await this.irs.deleteOne({ no: Number(no) });
  }
}

export default IrService;
