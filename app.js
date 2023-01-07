const express = require('express')
const app = express()
const port = 122

app.get('/', (req, res) => {
  res.send('Hello World!')
})
