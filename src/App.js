import React, {Component} from 'react'
import ScratchCard from './scratch-card'
import Flex from './flex'
import FlexItem from './flex/flex-item'
import {backgroundElementMapper, shuffle} from './utils'
import './App.css'

const scratchCard = (width, height, value) => {
  return (
    <FlexItem margin="sm">
      <ScratchCard
        width={width}
        height={height}
        percentToFinish={80}
        subRectRatio={0.5}
        value={value}
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
                {scratchCard(100, 100, this.state.cards[0])}
                {scratchCard(100, 100, this.state.cards[1])}
                {scratchCard(100, 100, this.state.cards[2])}
              </Flex>
              <Flex>
                {scratchCard(100, 100, this.state.cards[3])}
                {scratchCard(100, 100, this.state.cards[4])}
                {scratchCard(100, 100, this.state.cards[5])}
              </Flex>
              <Flex>
                {scratchCard(100, 100, this.state.cards[6])}
                {scratchCard(100, 100, this.state.cards[7])}
                {scratchCard(100, 100, this.state.cards[8])}
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
