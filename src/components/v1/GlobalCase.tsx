import { useContext, useMemo } from 'react'
import styled from 'styled-components'

import { OverviewText, Container as C } from '@components/common/components'
import Bar from '@components/common/Bar'
import { HomeV1Context } from '@utils/context'
import { COLOR } from '@utils/constant'
import { getLimitTextByLength } from '@utils/utils'
import useWindowDimensions from '@hooks/useWindowDimensions'

import Case from './Case'
import MapChart from './MapChart'
import CountriesCaseTable from './CountriesCaseTable'

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
  const { data } = useContext(HomeV1Context)
  const global = data.Global
  const countries = data.Countries
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
      const { Country, TotalConfirmed, TotalRecovered, TotalDeaths } = country
      topCountry.labels = [...topCountry.labels, getCountryName(Country)]
      topCountry.datasets[0].data = [
        ...topCountry.datasets[0].data,
        TotalConfirmed - TotalRecovered - TotalDeaths,
      ]
      topCountry.datasets[1].data = [...topCountry.datasets[1].data, TotalRecovered]
      topCountry.datasets[2].data = [...topCountry.datasets[2].data, TotalDeaths]
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
    const top = [...countries].sort((a, b) => b.NewConfirmed - a.NewConfirmed).slice(0, 10)
    top.map(country => {
      const { Country, NewConfirmed, NewDeaths, NewRecovered } = country
      topConfirmed.labels = [...topConfirmed.labels, getCountryName(Country)]
      topConfirmed.datasets[0].data = [...topConfirmed.datasets[0].data, NewConfirmed]
      topConfirmed.datasets[1].data = [...topConfirmed.datasets[1].data, NewRecovered]
      topConfirmed.datasets[2].data = [...topConfirmed.datasets[2].data, NewDeaths]
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
        <Bar title="Top daily cases" data={topDaily} />
        <Bar title="Top confirmed cases" data={topConfirmed} />
      </BarView>
    </Container>
  )
}

export default GlobalCase
