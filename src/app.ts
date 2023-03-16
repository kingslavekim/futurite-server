import { CommonDefine } from '@/define/commonDefine';
import express from 'express';
import { Routes } from '@interfaces/routes.interface';
import { logger } from '@utils/logger';
import { connect } from 'mongoose';
import cors from 'cors';

const config = require('config');
const path = require('path');

class App {
  public app: express.Application;
  public port: string | number;
  public env: string;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.env = process.env.NODE_ENV || 'development';

    this.initConfig();
    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initConfig() {
    this.app.use(cors({ origin: config.get('cors.origin'), credentials: config.get('cors.credentials') }));
    CommonDefine.prototype.mongoDbUrl = config.get('MONGO_DB_URL');
  }

  private connectToDatabase() {
    const options = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
    connect(CommonDefine.prototype.mongoDbUrl, options);
  }

  private async initializeMiddlewares() {
    if (this.env === 'production' || process.env.CLIENT_TYPE === 'BUILD') {
      process.env.DEPLY_PATH = path.resolve(__dirname, '../client/build', 'index.html');
      this.app.use(express.static('client/build'));
    }
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }
}

export default App;
