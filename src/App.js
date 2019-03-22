import React, {Component} from 'react'
import ScratchCard from './scratch-card'
import Flex from './flex'
import FlexItem from './flex/flex-item'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loaded: false
    }
    this.handleFinish = this.handleFinish.bind(this)
  }
  handleFinish() {
    console.log('done scratching')
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
              <Flex>
                <FlexItem margin="sm">
                  <ScratchCard
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
