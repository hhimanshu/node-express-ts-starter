import app from './app';

const port = 3000;

app.listen(port, () => {
  console.log(`APIs are available at http://localhost:${port}/api`);
});
