import { HorizontalBar } from 'react-chartjs-2'
import styled from 'styled-components'
import { ChartTooltipItem, ChartData } from 'chart.js'

import { BarProps } from '@interface/props'
import { chartTooltip, createChartProps } from '@utils/charts'

const BarName = styled.p`
  margin: 5px 0;
  padding: 0 15px;
  font-size: 20px;
`

const HorizontalStackBar = ({ data, title, sumValue }: BarProps) => {
  return (
    <div>
      <BarName>{title}</BarName>
      {/* <HorizontalBar
        data={data}
        width={400}
        height={250}
        options={{
          maintainAspectRatio: false,
          scales: {
            xAxes: [{ stacked: true, ticks: { minRotation: 45 } }],
            yAxes: [{ stacked: true }],
          },
          tooltips: {
            mode: 'label',
            position: 'nearest',
            callbacks: {
              label: (tooltipItem: ChartTooltipItem, data: ChartData) => {
                return chartTooltip(tooltipItem, data, sumValue)
              },
            },
          },
        }}
      /> */}
      <HorizontalBar {...createChartProps(data, sumValue)} />
    </div>
  )
}

export default HorizontalStackBar
