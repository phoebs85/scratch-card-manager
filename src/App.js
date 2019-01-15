import React, {Component} from 'react'
import ScratchCard from './scratch-card'
import Flex from './flex'
import FlexItem from './flex/flex-item'
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
        <img width={width} height={height} src="/background.gif" alt="scratch card" />
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
    this.setState({cards: true})
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
