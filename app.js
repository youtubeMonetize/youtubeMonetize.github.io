const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/', (req, res) => {
  res.send(`hello world`);
});



app.listen(port, () => {
  console.log(`Server running on port${port}`);
});

