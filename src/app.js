import 'dotenv/config';

import http from 'http';
import express from 'express';
import * as loaders from './loaders';
import { PORT } from './utils';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

loaders.middlewares(app);
loaders.router(app);

http.createServer(app).listen(PORT, () => {
  logger.info(`Server running and listening on port: ${PORT}`);
});
