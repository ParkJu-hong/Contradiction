const express = require('express')
const app = express()
const port = 3000


/*
    최종 목표
    1. 갤러리(사계절) CRUD
    2. About CRUD
*/

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})