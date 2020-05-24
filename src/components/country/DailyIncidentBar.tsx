import { useMemo } from 'react'

import VerticalStackBar from '@components/common/VerticalStackBar'
import { COLOR } from '@utils/constant'
import { FullCountry } from '@interface/props'

interface DailyIncidentBarProps {
  country: FullCountry
  max?: number
}

const DailyIncidentBar = ({ country, max = 30 }: DailyIncidentBarProps) => {
  const {
    timeline: { cases, recovered, deaths },
  } = country

  const daily = useMemo(() => {
    const casesData = cases.map((c, i) => (i === 0 ? c.value : c.value - cases[i - 1].value))
    const recoveredData = recovered.map((c, i) =>
      i === 0 ? c.value : c.value - recovered[i - 1].value,
    )
    const deathsData = deaths.map((c, i) => (i === 0 ? c.value : c.value - deaths[i - 1].value))
    const dailyIncident = {
      labels: cases.map(c => c.date).slice(-max),
      datasets: [
        {
          label: 'Daily confirmed',
          backgroundColor: COLOR.pink,
          hoverBackgroundColor: '#fa96a8',
          data: casesData.slice(-max),
        },
        {
          label: 'Daily recovered',
          backgroundColor: COLOR.green,
          hoverBackgroundColor: '#6bd69d',
          data: recoveredData.slice(-max),
        },
        {
          label: 'Daily deaths',
          backgroundColor: COLOR.red,
          hoverBackgroundColor: '#f07575',
          data: deathsData.slice(-max),
        },
      ],
    }

    return dailyIncident
  }, [])

  return (
    <div>
      <VerticalStackBar title="Top daily cases(last 30 days)" data={daily} />
    </div>
  )
}
export default DailyIncidentBar
