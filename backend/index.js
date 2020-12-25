const express = require('express')
const path = require('path')
const app = express()
const port = 3080

app.use(express.static(path.join(__dirname, '../frontend/build')))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })