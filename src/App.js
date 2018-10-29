import React, {Component} from 'react'
import ScratchCard from './scratch-card'
import Flex from './flex'
import FlexItem from './flex/flex-item'
import './App.css'

const scratchCard = (width, height, percentToFinish, subRectRatio) => (
  <FlexItem margin="sm">
    <ScratchCard
      width={width}
      height={height}
      percentToFinish={percentToFinish}
      subRectRatio={subRectRatio}
    >
      <img
        width={width}
        height={height}
        src="https://jennamolby.com/wp-content/uploads/2016/08/sorry.png"
        alt="scratch card"
      />
    </ScratchCard>
  </FlexItem>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Flex>
            {scratchCard(75, 75)}
            {scratchCard(75, 75)}
            {scratchCard(75, 75)}
          </Flex>
          <Flex>
            {scratchCard(75, 75)}
            {scratchCard(75, 75)}
            {scratchCard(75, 75)}
          </Flex>
          <Flex>
            {scratchCard(75, 75)}
            {scratchCard(75, 75)}
            {scratchCard(75, 75)}
          </Flex>
        </header>
      </div>
    )
  }
}

export default App
