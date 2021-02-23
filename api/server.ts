import express from 'express';
import routes from './index';

const port = 8080;

const app = express();
app.use(routes);

app.listen(port, () => {
  console.log(`APIs are available at http://localhost:${port}/`);
});

export default app;
