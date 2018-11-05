const express = require('express');
const port = 5000;
const app = express();

app.get('/hello', (req, res) => {
  res.send('<h1>Hello!</h1>');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
