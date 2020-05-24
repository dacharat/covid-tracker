import { Bar } from 'react-chartjs-2'

import { BarProps } from '@interface/props'
import { createChartProps } from '@utils/charts'
import { BarName, GraphContainer } from './components'

const VerticalStackBar = ({ data, title }: BarProps) => {
  return (
    <GraphContainer>
      <BarName>{title}</BarName>
      <Bar {...createChartProps(data, true)} />
    </GraphContainer>
  )
}

export default VerticalStackBar
