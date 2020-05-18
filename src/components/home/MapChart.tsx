import React, { memo, Fragment } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { geoCentroid, geoBounds } from 'd3-geo'
import { getDisplayFontSize, getLength, getCountryStatus } from '@utils/utils'
import { MapChartProps, Country } from 'src/interface/types'

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

const MAX_COMFIRMED = 500_000
const redValue = (totalConfirmed: number) => {
  if (totalConfirmed > MAX_COMFIRMED) {
    return 0
  }
  return 150 - (totalConfirmed / MAX_COMFIRMED) * 150
}

const MapChart = ({ countries, setTooltipContent }: MapChartProps) => {
  return (
    <ComposableMap width={1150} data-tip="" projectionConfig={{ scale: 200 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo: any) => {
            const centroid = geoCentroid(geo)
            const bound = geoBounds(geo)
            const size = getLength(bound[1][0], bound[0][0])
            const country = countries.find(c => c.CountryCode === geo.properties.ISO_A2)

            return (
              <Fragment key={geo.rsmKey}>
                <Geography
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties
                    setTooltipContent(getCountryStatus(NAME, country))
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('')
                  }}
                  style={{
                    default: {
                      fill: `rgb(${redValue(country ? country.TotalConfirmed : 0)}, 255, 255)`,
                      outline: 'none',
                      stroke: '#fff',
                      strokeWidth: '0.5',
                    },
                    hover: {
                      fill: '#00d4d4',
                      outline: 'none',
                    },
                  }}
                />
                <Marker
                  onMouseEnter={() => {
                    const { NAME } = geo.properties
                    setTooltipContent(getCountryStatus(NAME, country))
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('')
                  }}
                  coordinates={centroid}
                >
                  <text fontSize={getDisplayFontSize(size)} textAnchor="middle">
                    {geo.properties.NAME}
                  </text>
                </Marker>
              </Fragment>
            )
          })
        }
      </Geographies>
    </ComposableMap>
  )
}

export default memo(MapChart)
