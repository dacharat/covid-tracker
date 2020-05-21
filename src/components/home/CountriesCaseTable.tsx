import { useState, useContext } from 'react'
import { Button, Table } from 'antd'
import styled from 'styled-components'

import { SIZE } from '@utils/constant'
import { HomeContext } from '@utils/context'
import Flag from '@components/common/Flag'
import { numberWithCommas } from '@utils/utils'

const CountryView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
const LoadMoreView = styled.div`
  text-align: center;
  margin-top: 12;
  height: 32;
  line-height: 32px;
`

const columns = [
  {
    title: '',
    dataIndex: 'key',
    width: 45,
  },
  {
    title: 'Country',
    dataIndex: 'country',
    width: 100,
  },
  {
    title: 'Confirmed',
    dataIndex: 'confirmedCase',
    width: 100,
  },
  {
    title: 'Recovered',
    dataIndex: 'recoveredCase',
    width: 90,
  },
  {
    title: 'Deaths',
    dataIndex: 'deathsCase',
    width: 80,
  },
]

const CountriesCaseTable = () => {
  const { data } = useContext(HomeContext)
  const countries = data.Countries
  const tableSource = countries.map((country, i) => ({
    key: i + 1,
    country: (
      <CountryView>
        <Flag country={country} size={2} radius={10} />
        <div>{country.Country}</div>
      </CountryView>
    ),
    confirmedCase: numberWithCommas(country.TotalConfirmed),
    deathsCase: numberWithCommas(country.TotalDeaths),
    recoveredCase: numberWithCommas(country.TotalRecovered),
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
    <div>
      <Table
        columns={columns}
        dataSource={tableSource.slice(0, displaySize)}
        pagination={false}
        scroll={{ y: 480 }}
        size="small"
      />
      {tableSource.length !== displaySize && (
        <LoadMoreView>
          <Button onClick={onLoadMore}>loading more</Button>
        </LoadMoreView>
      )}
    </div>
  )
}

export default CountriesCaseTable
