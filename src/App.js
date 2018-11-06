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
        brush="brush"
        width={width}
        height={height}
        percentToFinish={50}
        subRectRatio={0.7}
        value={value}
        imgURL="./overlay.gif"
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
    const cards = [0, 0, 0, 0, 0, 0, 400, 400, 500]
    this.setState({cards: shuffle(cards)})
  }

  render() {
    return (
      this.state.cards && (
        <div className="App">
          <header className="App-header">
            <div className="Game">
              <h4 className="card-header">SCRATCH THE LOGO</h4>
              <Flex>{scratchCard(300, 300, 0, this.handleFinish)}</Flex>
            </div>
          </header>
        </div>
      )
    )
  }
}

export default App
