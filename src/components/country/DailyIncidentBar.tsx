import VerticalStackBar from '@components/common/VerticalStackBar'
import { useMemo } from 'react'
import { COLOR } from '@utils/constant'
import { FullCountry } from '@interface/props'

interface DailyIncidentBarProps {
  country: FullCountry
}

const DailyIncidentBar = ({ country }: DailyIncidentBarProps) => {
  const {
    timeline: { cases, recovered, deaths },
  } = country

  const daily = useMemo(() => {
    const dailyIncident = {
      labels: cases.map(c => c.date),
      datasets: [
        {
          label: 'Daily confirmed',
          backgroundColor: COLOR.pink,
          hoverBackgroundColor: '#fa96a8',
          data: cases.map((c, i) => (i === 0 ? c.value : c.value - cases[i - 1].value)),
        },
        {
          label: 'Daily recovered',
          backgroundColor: COLOR.green,
          hoverBackgroundColor: '#6bd69d',
          data: recovered.map((c, i) => (i === 0 ? c.value : c.value - recovered[i - 1].value)),
        },
        {
          label: 'Daily deaths',
          backgroundColor: COLOR.red,
          hoverBackgroundColor: '#f07575',
          data: deaths.map((c, i) => (i === 0 ? c.value : c.value - deaths[i - 1].value)),
        },
      ],
    }

    return dailyIncident
  }, [])

  return (
    <div>
      <VerticalStackBar title="Top daily cases" data={daily} />
    </div>
  )
}
export default DailyIncidentBar
