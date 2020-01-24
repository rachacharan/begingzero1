const express = require('express')
const path = require('path')
const app = express()
const port = process.env.port || 3000

app.use(express.static(__dirname + '/dist/minipro'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/dist/minipro/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))