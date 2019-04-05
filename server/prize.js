const uuidv4 = require('uuid/v4')

class Prize {
  constructor(name, quantity) {
    this.id = uuidv4()
    // ASSUMPTION: image exists in jpg format and named consistently
    this.imageSrc = `/prizes/${name}.jpg`
    this.inventory = {
      available: quantity || 0,
      assigned: 0,
      redeemed: 0
    }
    this.name = name || ''
  }

  get shallow() {
    return {
      id: this.id,
      imageSrc: this.imageSrc
    }
  }

  assign() {
    const {available, assigned} = this.inventory
    if (available <= 0) {
      console.log(`Attempted to assign ${this.name}, but ${available} available.`)
    } else {
      this.inventory.available = available - 1
      this.inventory.assigned = assigned + 1
    }
    return this.shallow
  }

  redeem() {
    const {assigned, redeemed} = this.inventory
    if (assigned <= 0) {
      throw `Attempted to redeem ${this.name}, but ${available} assigned.`
    } else {
      this.inventory.assigned = assigned - 1
      this.inventory.redeemed = redeemed + 1
      return this.shallow
    }
  }

  resetAssigned() {
    this.inventory.available = this.inventory.available + this.inventory.assigned
    this.inventory.assigned = 0
  }
}

module.exports = {
  Prize
}
