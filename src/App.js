import React, {Component} from 'react'

import './App.css'

import ScratchCard from './scratch-card'
import Flex from './flex'
import FlexItem from './flex/flex-item'

import {getStatus, setStatus} from './local-storage'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loaded: false,
      isFinished: false
    }
    this.handleFinish = this.handleFinish.bind(this)
  }
  handleFinish() {
    setStatus('complete')
  }
  async componentDidMount() {
    const response = await fetch('/prizes')
    console.log('response', await response.json())
    this.setState({loaded: true})
    // check for completion status
    const status = getStatus()
    if (status === 'complete') {
      this.setState({isFinished: true})
    }
  }

  render() {
    const {loaded, isFinished} = this.state
    return (
      loaded && (
        <div className="App">
          <header className="App-header">
            <div className="Game">
              <h4 className="card-header">THANKS FOR PARTICIPATING!</h4>
              <Flex>
                <FlexItem margin="sm">
                  <ScratchCard
                    isFinished={isFinished}
                    brush="brush"
                    width={300}
                    height={300}
                    percentToFinish={70}
                    subRectRatio={0.7}
                    imgURL="./overlay.gif"
                    onFinish={this.handleFinish}
                  >
                    <img width={300} height={300} src="/background.gif" alt="scratch card" />
                  </ScratchCard>
                </FlexItem>
              </Flex>
            </div>
          </header>
        </div>
      )
    )
  }
}

export default App
