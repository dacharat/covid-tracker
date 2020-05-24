import { Bar } from 'react-chartjs-2'
import styled from 'styled-components'

import { BarProps } from '@interface/props'
import { createChartProps } from '@utils/charts'

const BarName = styled.p`
  margin: 5px 0;
  padding: 0 15px;
  font-size: 20px;
`

const VerticalStackBar = ({ data, title }: BarProps) => {
  return (
    <div>
      <BarName>{title}</BarName>
      <Bar {...createChartProps(data, true)} />
    </div>
  )
}

export default VerticalStackBar
