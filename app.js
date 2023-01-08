const express = require('express');
const app = express();
const port = 8080;



app.get('/secondroute', (req, res) => {
  res.send(`hello world`);
});



app.listen(port, () => {
  console.log(`Server running on port${port}`);
});

