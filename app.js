const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('base endpoint');
});

app.get('/validate-rule', (req, res) => {
    res.send('validate-endpoint');

});

app.listen(port, () => {
  console.log(`API at http://localhost:${port}`)
});