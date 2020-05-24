import { Line as LineChart } from 'react-chartjs-2'
import { useMemo } from 'react'

import { COLOR } from '@utils/constant'
import { createChartProps } from '@utils/charts'
import { FullCountry } from '@interface/props'
import { BarName, GraphContainer } from '@components/common/components'

interface LineProps {
  country: FullCountry
}

const Line = ({ country }: LineProps) => {
  const {
    timeline: { cases, recovered, deaths },
  } = country

  const data = useMemo(() => {
    return {
      labels: cases.map(c => c.date),
      datasets: [
        {
          label: 'Confirmed',
          backgroundColor: COLOR.pink,
          borderColor: COLOR.pink,
          fill: false,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: cases.map(c => c.value),
        },
        {
          label: 'Recovered',
          backgroundColor: COLOR.green,
          borderColor: COLOR.green,
          fill: false,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: recovered.map(c => c.value),
        },
        {
          label: 'Deaths',
          backgroundColor: COLOR.red,
          borderColor: COLOR.red,
          fill: false,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: deaths.map(c => c.value),
        },
      ],
    }
  }, [])

  return (
    <GraphContainer>
      <BarName>Trend of infection</BarName>
      <LineChart {...createChartProps(data)} />
    </GraphContainer>
  )
}

export default Line
