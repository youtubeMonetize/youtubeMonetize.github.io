const express = require('express')
const app = express()
const port = 122
const searchString = req.query.search;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
${searchString ? '<h2> You searched </h2>'}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
