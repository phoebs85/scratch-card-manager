const express = require('express')

const path = require('path')
const server = express()
server.use(express.static(path.join(__dirname, 'build')))

server.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 8080
server.listen(port)

console.log('App is listening on port ' + port)
