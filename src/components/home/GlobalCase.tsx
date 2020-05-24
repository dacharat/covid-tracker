import { useContext, useMemo } from 'react'
import styled from 'styled-components'

import { OverviewText, Container as C } from '@components/common/components'
import HorizontalStackBar from '@components/common/HorizontalStackBar'
import { COLOR } from '@utils/constant'
import { getLimitTextByLength } from '@utils/utils'
import useWindowDimensions from '@hooks/useWindowDimensions'

import Case from './Case'
import MapChart from './MapChart'
import CountriesCaseTable from './CountriesCaseTable'
import { HomeContext } from '@utils/context'

const Container = styled(C)`
  width: 100%;
  padding: 10px 0;
`
const Overview = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 900px;
  width: 100%;
  margin: auto;
`
const MapView = styled.div`
  align-items: center;
  width: 100%;
  padding: 5px 0;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 1000px) {
    display: grid;
    padding: 15px 0;
    grid-template-columns: 30% 70%;
  }
`
const BarView = styled.div`
  overflow-x: auto;
  width: 100%;
  justify-items: center;
  display: grid;
  @media (min-width: 550px) {
    padding: 15px 0;
    grid-template-columns: repeat(2, 1fr);
  }
`

const GlobalCase = () => {
  const { global, countries } = useContext(HomeContext)
  const { width } = useWindowDimensions()

  const getCountryName = (name: string) => {
    return width > 10000 ? name : getLimitTextByLength(name, 10)
  }

  const topConfirmed = useMemo(() => {
    const topCountry = {
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

    countries.slice(0, 10).map(country => {
      const { country: name, recovered, deaths, active } = country
      topCountry.labels = [...topCountry.labels, getCountryName(name)]
      topCountry.datasets[0].data = [...topCountry.datasets[0].data, active]
      topCountry.datasets[1].data = [...topCountry.datasets[1].data, recovered]
      topCountry.datasets[2].data = [...topCountry.datasets[2].data, deaths]
    })

    return topCountry
  }, [])

  const topDaily = useMemo(() => {
    const topConfirmed = {
      labels: [],
      datasets: [
        {
          label: 'New Confirmed',
          backgroundColor: COLOR.pink,
          hoverBackgroundColor: '#fa96a8',
          data: [],
        },
        {
          label: 'New Recovered',
          backgroundColor: COLOR.green,
          hoverBackgroundColor: '#6bd69d',
          data: [],
        },
        {
          label: 'New Deaths',
          backgroundColor: COLOR.red,
          hoverBackgroundColor: '#f07575',
          data: [],
        },
      ],
    }
    const top = [...countries].sort((a, b) => b.todayCases - a.todayCases).slice(0, 10)
    top.map(country => {
      const { country: name, todayCases, todayDeaths, todayRecovered } = country
      topConfirmed.labels = [...topConfirmed.labels, getCountryName(name)]
      topConfirmed.datasets[0].data = [...topConfirmed.datasets[0].data, todayCases]
      topConfirmed.datasets[1].data = [...topConfirmed.datasets[1].data, todayRecovered]
      topConfirmed.datasets[2].data = [...topConfirmed.datasets[2].data, todayDeaths]
    })

    return topConfirmed
  }, [])

  return (
    <Container>
      <Overview>
        <OverviewText>Global Overview</OverviewText>
      </Overview>
      <Case caseData={global} />
      <MapView>
        <CountriesCaseTable />
        <MapChart />
      </MapView>

      <BarView>
        <HorizontalStackBar title="Top daily cases" data={topDaily} />
        <HorizontalStackBar sumValue title="Top confirmed cases" data={topConfirmed} />
      </BarView>
    </Container>
  )
}

export default GlobalCase
