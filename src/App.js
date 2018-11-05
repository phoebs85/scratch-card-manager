import React, {Component} from 'react'
import ScratchCard from './scratch-card'
import Flex from './flex'
import FlexItem from './flex/flex-item'
import {backgroundElementMapper, shuffle} from './utils'
import './App.css'

const scratchCard = (width, height, value, handleFinish) => {
  return (
    <FlexItem margin="sm">
      <ScratchCard
        width={width}
        height={height}
        percentToFinish={80}
        subRectRatio={0.5}
        value={value}
        onFinish={() => handleFinish(value)}
      >
        {backgroundElementMapper[value]
          ? backgroundElementMapper[value](width, height)
          : backgroundElementMapper.default(width, height, value)}
      </ScratchCard>
    </FlexItem>
  )
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: null,
      score: 0
    }
    this.handleFinish = this.handleFinish.bind(this)
  }
  handleFinish(value) {
    this.setState({score: this.state.score + value})
  }
  componentDidMount() {
    const cards = [0, 0, 0, 100, 100, 100, 200, 250, 500]
    this.setState({cards: shuffle(cards)})
  }

  render() {
    return (
      this.state.cards && (
        <div className="App">
          <header className="App-header">
            <div className="Game">
              <h4>Scratch to Win!</h4>
              <Flex>
                {scratchCard(100, 100, this.state.cards[0], this.handleFinish)}
                {scratchCard(100, 100, this.state.cards[1], this.handleFinish)}
                {scratchCard(100, 100, this.state.cards[2], this.handleFinish)}
              </Flex>
              <Flex>
                {scratchCard(100, 100, this.state.cards[3], this.handleFinish)}
                {scratchCard(100, 100, this.state.cards[4], this.handleFinish)}
                {scratchCard(100, 100, this.state.cards[5], this.handleFinish)}
              </Flex>
              <Flex>
                {scratchCard(100, 100, this.state.cards[6], this.handleFinish)}
                {scratchCard(100, 100, this.state.cards[7], this.handleFinish)}
                {scratchCard(100, 100, this.state.cards[8], this.handleFinish)}
              </Flex>
              <h5>YOU WON {this.state.score} POINTS!</h5>
            </div>
          </header>
        </div>
      )
    )
  }
}

export default App
