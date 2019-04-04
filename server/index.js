const express = require('express')
const uuidv4 = require('uuid/v4')
const path = require('path')

const server = express()
server.use(express.static(path.join(__dirname, '../build')))

server.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

const prizes = {
  sweater: 15,
  shirt: 40,
  bands: 50,
  notebook: 70
}

const sessionId = uuidv4()

server.get('/prizes', function (req, res) {
  res.json({sessionId, prize: 'hoodie'})
})

const port = process.env.PORT || 8080
server.listen(port)

console.log('App is listening on port ' + port)
