process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import validateEnv from '@utils/validateEnv';
import NoticeRoute from '@routes/notice.route';
import IrRoute from '@routes/ir.route';
import GalleryRoute from '@routes/galley.route';
import AdminRoute from '@routes/admin.route';

validateEnv();

const app = new App([ new NoticeRoute(), new IrRoute(), new GalleryRoute(), new AdminRoute() ]);

app.listen();
