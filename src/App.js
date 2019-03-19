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
        percentToFinish={70}
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
      loaded: false,
      score: 0
    }
    this.handleFinish = this.handleFinish.bind(this)
  }
  handleFinish(value) {
    this.setState({score: this.state.score + value})
  }
  componentDidMount() {
    this.setState({loaded: true})
  }

  render() {
    return (
      this.state.loaded && (
        <div className="App">
          <header className="App-header">
            <div className="Game">
              <h4 className="card-header">THANKS FOR PARTICIPATING!</h4>
              <Flex>{scratchCard(300, 300, 0, this.handleFinish)}</Flex>
            </div>
          </header>
        </div>
      )
    )
  }
}

export default App
