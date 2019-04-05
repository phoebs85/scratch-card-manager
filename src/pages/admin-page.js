import React from 'react'

class AdminPage extends React.Component {
  constructor() {
    super()
    this.state = {
      inventory: {},
      successRate: 100
    }
  }

  async updateStatus() {
    const response = await fetch('/status')
    const {inventory, successRate} = await response.json()
    this.setState({inventory, successRate})
  }

  async componentDidMount() {
    this.updateStatus()
  }

  render() {
    const {inventory, successRate} = this.state
    return (
      <div className="App">
        <header className="App-header">
          {Object.values(inventory).map((item) => (
            <React.Fragment>
              {JSON.stringify(item)}
            </React.Fragment>
          ))}
          {successRate}%
        </header>
      </div>
    )
  }
}

export default AdminPage
