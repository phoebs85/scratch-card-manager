import React from 'react'
import {Pie} from 'react-chartjs-2/'

import {colors} from './constants'

const COLORS = {
  AVAILABLE: colors.darkGreen,
  ASSIGNED: colors.warningBorder,
  REDEEMED: colors.darkBlue
}

const PieChart = ({inventory = {}}) => {
  const {available, assigned, redeemed} = inventory
  const chartData = {
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
    ],
    fontColor: 'white'
  }
  return (
    <React.Fragment>
      <Pie width={250} height={250} data={chartData} />
    </React.Fragment>
  )
}

export default PieChart
