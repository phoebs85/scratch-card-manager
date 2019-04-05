import React from 'react'
import {toast} from 'react-toastify'
import debounce from 'lodash.debounce'
import {PrimaryButton} from '@vclabs/web-components-buttons'

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
    this.resetAssigned = this.resetAssigned.bind(this)
  }

  async updateStatus() {
    const response = await fetch('/status')
    const {inventory, successRate} = await response.json()
    this.setState({inventory, successRate})
  }

  resetAssigned = debounce(async () => {
    const response = await fetch('/prizes/reset', {
      method: 'post'
    })
    const {inventory, resetCount} = await response.json()
    toast(`Reset ${resetCount} prizes from assigned to available!`, {
      autoClose: 8000
    })
    // Immediately update inventory
    this.setState({inventory})
  }, 400)

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
              <PrimaryButton onClick={this.resetAssigned}>
                Reset Assigned Prizes
              </PrimaryButton>
            </React.Fragment>
          )}

          {/* {successRate !== undefined && `Success Rate: ${successRate}%`} */}
        </header>
      </div>
    )
  }
}

export default AdminPage
