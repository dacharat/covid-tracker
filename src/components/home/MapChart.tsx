import React, { memo, Fragment, useContext } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { geoCentroid, geoBounds } from 'd3-geo'

import { getDisplayFontSize, getLength, getCountryStatus, getColor } from '@utils/utils'
import { GEO_URL } from '@utils/constant'
import { HomeContext } from '@utils/context'

const MapChart = () => {
  const { countries, setContent } = useContext(HomeContext)

  return (
    <ComposableMap width={1150} data-tip="" projectionConfig={{ scale: 200 }}>
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo: any) => {
            const centroid = geoCentroid(geo)
            const bound = geoBounds(geo)
            const size = getLength(bound[1][0], bound[0][0])
            const country = countries.find(c => c.countryInfo.iso2 === geo.properties.ISO_A2)

            return (
              <Fragment key={geo.rsmKey}>
                <Geography
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties
                    setContent(getCountryStatus(NAME, country))
                  }}
                  onMouseLeave={() => {
                    setContent('')
                  }}
                  style={{
                    default: {
                      fill: getColor(country ? country.cases : 0),
                      outline: 'none',
                      stroke: '#fff',
                      strokeWidth: '0.5',
                    },
                    hover: {
                      fill: 'rgb(255,0,100)',
                      outline: 'none',
                    },
                  }}
                />
                <Marker
                  onMouseEnter={() => {
                    const { NAME } = geo.properties
                    setContent(getCountryStatus(NAME, country))
                  }}
                  onMouseLeave={() => {
                    setContent('')
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
