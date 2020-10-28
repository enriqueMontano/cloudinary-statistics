import 'dotenv/config';

import http from 'http';
import express from 'express';

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

http.createServer(app).listen(PORT, () => {
  console.log(`Server running and listening on port: ${PORT}`);
});
