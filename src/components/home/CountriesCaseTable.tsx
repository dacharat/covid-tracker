import { useState, useContext } from 'react'
import { Button, Table } from 'antd'
import ReactCountryFlag from 'react-country-flag'

import { SIZE } from '@utils/constant'
import styled from 'styled-components'
import { HomeContext } from '@utils/context'

const Flag = styled(ReactCountryFlag)`
  border-radius: 10px;
  padding: 0 5px;
`
const CountryView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const columns = [
  {
    title: '',
    dataIndex: 'key',
    width: 50,
  },
  {
    title: 'Country',
    dataIndex: 'country',
    width: 150,
  },
  {
    title: 'Total Confirmed',
    dataIndex: 'confirmedCase',
    width: 100,
  },
  {
    title: 'Total Deaths',
    dataIndex: 'deathsCase',
    width: 100,
  },
  {
    title: 'Total Recovered',
    dataIndex: 'recoveredCase',
    width: 100,
  },
]

const CountriesCaseTable = () => {
  const { data } = useContext(HomeContext)
  const countries = data.Countries
  const tableSource = countries.map((country, i) => ({
    key: i + 1,
    country: (
      <CountryView>
        <Flag
          svg
          style={{
            width: '2em',
            height: '2em',
          }}
          countryCode={country.CountryCode}
        />
        <div>{country.Country}</div>
      </CountryView>
    ),
    confirmedCase: country.TotalConfirmed,
    deathsCase: country.TotalDeaths,
    recoveredCase: country.TotalRecovered,
  }))

  const [displaySize, setDisplaySize] = useState<number>(SIZE)

  const onLoadMore = () => {
    if (tableSource.length - displaySize > SIZE) {
      setDisplaySize(displaySize + SIZE)
    } else {
      setDisplaySize(countries.length)
    }
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={tableSource.slice(0, displaySize)}
        pagination={false}
        scroll={{ y: 500 }}
      />
      {tableSource.length !== displaySize && (
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
      )}
    </>
  )
}

export default CountriesCaseTable
