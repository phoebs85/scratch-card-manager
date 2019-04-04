const {Prize} = require('./prize')

class PrizeInterface {
  constructor({successRate}) {
    this.inventory = {}
    this.noPrize = new Prize('no-prize', 0)
    this.successRate = successRate || 1
  }

  get status() {
    return {
      inventory: this.inventory,
      successRate: this.successRate
    }
  }

  getPrize(prizeId) {
    return this.inventory[prizeId]
  }

  addPrize(name, quantity) {
    const prize = new Prize(name, quantity)
    this.inventory[prize.id] = prize
  }

  totalQuantity(status) {
    if (['available', 'assigned', 'redeemed'].includes(status)) {
      const prizesArray = Object.values(this.inventory)
      return prizesArray.reduce((acc, prize) => acc + prize.inventory[status], 0)
    } else {
      console.error(`Unrecognized status: ${status}`)
      return 0
    }
  }

  assignRandomPrize() {
    const availableQuantity = this.totalQuantity('available')
    if (availableQuantity > 0 && Math.random() <= this.successRate) {
      // index prizes inventory by cumulative weight
      const weightedPrizes = {}

      let weight = 0
      Object.values(this.inventory).forEach((prize) => {
        const cumulativeWeight = prize.inventory.available + weight
        weight = cumulativeWeight
        weightedPrizes[cumulativeWeight] = prize
      })

      const randomNumber = Math.random() * availableQuantity
      const weightIndex = Object.keys(weightedPrizes).find((weight) => weight >= randomNumber)

      const prize = weightedPrizes[weightIndex]
      prize.assign()
      return prize
    } else {
      return this.noPrize
    }
  }
}

module.exports = {
  PrizeInterface
}
