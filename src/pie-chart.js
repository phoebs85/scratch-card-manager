import React from 'react'
import {Pie} from 'react-chartjs-2/'

import Spacing from './spacing'
import {colors} from './constants'

const COLORS = {
  AVAILABLE: colors.red,
  ASSIGNED: colors.yellow,
  REDEEMED: colors.blue
}

const PieChart = ({inventory = {}}) => {
  const {available, assigned, redeemed} = inventory
  const data = {
    labels: ['Available', 'Assigned', 'Redeemed'],
    datasets: [
      {
        data: [available, assigned, redeemed],
        backgroundColor: [COLORS.AVAILABLE, COLORS.ASSIGNED, COLORS.REDEEMED],
        hoverBackgroundColor: [
          COLORS.AVAILABLE,
          COLORS.ASSIGNED,
          COLORS.REDEEMED
        ]
      }
    ]
  }

  const options = {
    legend: {
      labels: {
        fontColor: colors.white,
        fontSize: 16
      }
    }
  }

  return (
    <Spacing margin="md">
      <Pie width={250} height={250} data={data} options={options} />
    </Spacing>
  )
}

export default PieChart
