import React, {Component} from 'react'
import logo from './logo.svg'
import ScratchCard from './scratch-card'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ScratchCard
            width="150"
            height="150"
            percentToFinish={80}
            subRectRatio={0.5}
          >
            <img
              width="150"
              height="150"
              src="https://jennamolby.com/wp-content/uploads/2016/08/sorry.png"
            />
          </ScratchCard>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
