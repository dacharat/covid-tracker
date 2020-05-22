import { HomeContext } from '@utils/context'
import { useContext, useMemo } from 'react'
import { HorizontalBar } from 'react-chartjs-2'

import { COLOR } from '@utils/constant'

const TopCountryBar = () => {
  const { data } = useContext(HomeContext)
  const topCountries = data.Countries.slice(0, 10)

  const countries = useMemo(() => {
    const data = {
      labels: [],
      datasets: [
        {
          label: 'Actived',
          backgroundColor: COLOR.yellow,
          hoverBackgroundColor: '#fadc82',
          data: [],
        },
        {
          label: 'Recovered',
          backgroundColor: COLOR.green,
          hoverBackgroundColor: '#6bd69d',
          data: [],
        },
        {
          label: 'Deaths',
          backgroundColor: COLOR.red,
          hoverBackgroundColor: '#f07575',
          data: [],
        },
      ],
    }

    topCountries.map(country => {
      data.labels = [...data.labels, country.Country]
      data.datasets[0].data = [
        ...data.datasets[0].data,
        country.TotalConfirmed - country.TotalRecovered - country.TotalDeaths,
      ]
      data.datasets[1].data = [...data.datasets[1].data, country.TotalRecovered]
      data.datasets[2].data = [...data.datasets[2].data, country.TotalDeaths]
    })

    return data
  }, [])

  return (
    <div style={{ width: '100%' }}>
      <h2>Top 10 Confirmed case</h2>
      <HorizontalBar
        data={countries}
        width={500}
        height={250}
        options={{
          maintainAspectRatio: false,
          scales: { xAxes: [{ stacked: true }], yAxes: [{ stacked: true }] },
        }}
      />
    </div>
  )
}

export default TopCountryBar
