import app from './app';

const port = 8000;

app.listen(port, () => {
  console.log(`APIs are available at http://localhost:${port}/`);
});
