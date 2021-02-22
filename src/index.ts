import express from 'express';
import routes from './api';

const app = express();
const port = 3000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
