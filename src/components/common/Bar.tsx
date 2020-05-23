import { HorizontalBar } from 'react-chartjs-2'
import styled from 'styled-components'

import { BarProps } from '@interface/v1/props'

const BarName = styled.p`
  margin: 5px 0;
  padding: 0 15px;
  font-size: 20px;
`

const Bar = ({ data, title }: BarProps) => {
  return (
    <div>
      <BarName>{title}</BarName>
      <HorizontalBar
        data={data}
        width={400}
        height={250}
        options={{
          maintainAspectRatio: false,
          scales: {
            xAxes: [{ stacked: true, ticks: { minRotation: 45 } }],
            yAxes: [{ stacked: true }],
          },
        }}
      />
    </div>
  )
}

export default Bar
