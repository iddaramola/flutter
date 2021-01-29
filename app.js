const express = require('express');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const app = express();


//const PORT = process.env.PORT || 3000;
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}


app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
    res.json({
      "message": "My Rule-Validation API",
     "status": "success",
     "data": {
      "name": "Idowu Olayinka Daramola",
      "github": "@iddaramola",
      "email": "idowu.daramola@gmail.com",
      "mobile": "08062178102",
      "twitter": "@idowudaramola"
    }
  });
});

app.post('/validate-rule', (req, res) => {
    res.send('validate-endpoint');

});

app.listen(port, () => {
  console.log(`API is listening at http://localhost:${port}`)
});