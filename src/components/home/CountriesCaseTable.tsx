import { useState, useEffect } from 'react'
import { List, Button } from 'antd'
import ReactCountryFlag from 'react-country-flag'

import { Country } from '@interface/types'
import { CountryCaseProps } from '@interface/props'
import { getConfirmedCase, getDeathsCase, getRecoveredCase } from '@utils/utils'
import { SIZE } from '@utils/constant'
import styled from 'styled-components'

const Flag = styled(ReactCountryFlag)`
  border-radius: 10px;
`

const CountriesCaseTable = ({ countries }: CountryCaseProps) => {
  const [countriesSource, setCountriesSource] = useState<Country[]>([])

  useEffect(() => {
    if (countries.length > SIZE) {
      setCountriesSource(countries.slice(0, SIZE))
    } else {
      setCountriesSource(countries)
    }
  }, [])

  const onLoadMore = () => {
    if (countries.length - countriesSource.length > SIZE) {
      setCountriesSource([
        ...countriesSource,
        ...countries.slice(countriesSource.length, countriesSource.length + 10),
      ])
    } else {
      setCountriesSource([
        ...countriesSource,
        ...countries.slice(countriesSource.length, countries.length),
      ])
    }
  }

  const LoadMore =
    countries.length !== countriesSource.length ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null

  return (
    <List
      className="demo-loadmore-list"
      loading={false}
      itemLayout="horizontal"
      loadMore={LoadMore}
      dataSource={countriesSource}
      renderItem={country => (
        <List.Item>
          <Flag
            svg
            style={{
              width: '3em',
              height: '3em',
            }}
            countryCode={country.CountryCode}
          />
          <div>{country.Country}</div>
          <div>{getConfirmedCase(country)}</div>
          <div>{getDeathsCase(country)}</div>
          <div>{getRecoveredCase(country)}</div>
        </List.Item>
      )}
    />
  )
}

export default CountriesCaseTable
