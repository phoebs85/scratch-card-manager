const express = require('express')
const bodyParser = require('body-parser')
const uuidv4 = require('uuid/v4')
const {join} = require('path')

const {PrizeInterface} = require('./prize-interface')

const sessionId = uuidv4()
// Initiate Prizes
const prizeInterface = new PrizeInterface({successRate: 75})
prizeInterface.addPrize('sweater', 15)
prizeInterface.addPrize('shirt', 40)
prizeInterface.addPrize('bands', 50)
prizeInterface.addPrize('notebook', 15)

const server = express()
server.use(bodyParser.json())
server.use(express.static(join(__dirname, '../build')))

server.get('/', function(req, res) {
  return res.sendFile(join(__dirname, '../build/index.html'))
})

server.get('/status', function(req, res) {
  return res.json(prizeInterface.status)
})

server.post('/prizes', function(req, res) {
  if (req.body.sessionId === sessionId) {
    return res.json({sessionId})
  } else {
    const prize = prizeInterface.assignRandomPrize()
    return res.json({sessionId, prize: prize.shallow})
  }
})

server.post('/prizes/reset', function(req, res) {
  const assignedPrizeCount = prizeInterface.totalQuantity('assigned')
  prizeInterface.resetAssignedPrizes()
  return res.json({...prizeInterface.status, resetCount: assignedPrizeCount})
})

const port = process.env.PORT || 8080
server.listen(port)

console.log(`App is listening on ${port}. Visit localhost:${port}`)
