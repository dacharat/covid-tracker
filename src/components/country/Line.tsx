import { Line as LineChart } from 'react-chartjs-2'
import { useMemo } from 'react'
import { COLOR } from '@utils/constant'
import { FullCountry } from '@interface/props'

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40],
//     },
//     {
//       label: 'My Second dataset',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [25, 39, 40, 21, 46, 55, 40],
//     },
//   ],
// }

interface LineProps {
  country: FullCountry
}

const Line = ({ country }: LineProps) => {
  const { timeline } = country

  const data = useMemo(() => {
    return {
      labels: timeline.cases.map(c => c.date),
      datasets: [
        {
          label: 'Confirmed',
          backgroundColor: COLOR.pink,
          fill: false,
          data: timeline.cases.map(c => c.value),
        },
        {
          label: 'Recovered',
          backgroundColor: COLOR.green,
          fill: false,
          data: timeline.recovered.map(c => c.value),
        },
        {
          label: 'Deaths',
          backgroundColor: COLOR.red,
          fill: false,
          data: timeline.deaths.map(c => c.value),
        },
      ],
    }
  }, [])

  return (
    <div>
      <h2>Trend of infection</h2>
      <LineChart data={data} />
    </div>
  )
}

export default Line
