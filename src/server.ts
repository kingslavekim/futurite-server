process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import validateEnv from '@utils/validateEnv';
import NoticeRoute from '@routes/notice.route';

validateEnv();

const app = new App([ new NoticeRoute() ]);

app.listen();
