import React from 'react'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  PlainButton,
  UnstyledButton,
  ButtonLinkStyle
} from '@vclabs/web-components-buttons'
import Flex from '../flex'
import FlexItem from '../flex/flex-item'
import PieChart from '../pie-chart'

class AdminPage extends React.Component {
  constructor() {
    super()
    this.state = {
      inventory: {},
      successRate: 100,
      intervalId: null
    }
    this.updateStatus = this.updateStatus.bind(this)
  }

  async updateStatus() {
    const response = await fetch('/status')
    const {inventory, successRate} = await response.json()
    this.setState({inventory, successRate})
  }

  async resetAssigned() {}

  componentDidMount() {
    this.updateStatus()
    const intervalId = setInterval(this.updateStatus, 5000)
    this.setState({intervalId})
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  render() {
    const {inventory, successRate} = this.state
    return (
      <div className="App">
        <header className="App-header">
          {inventory && (
            <React.Fragment>
              <Flex alignItems="center">
                {Object.values(inventory).map((item) => (
                  <FlexItem margin="sm">
                    <PieChart data={item} />
                  </FlexItem>
                ))}
              </Flex>
              <SecondaryButton>Reset Assigned Prizes</SecondaryButton>
            </React.Fragment>
          )}
          {/* {successRate !== undefined && `Success Rate: ${successRate}%`} */}
        </header>
      </div>
    )
  }
}

export default AdminPage
