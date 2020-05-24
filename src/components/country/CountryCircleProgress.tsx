import { useState, useEffect } from 'react'
import styled from 'styled-components'

import CircleProgress from '@components/common/CircleProgress'
import { AdditionRate } from '@interface/types'
import { FullCountry } from '@interface/props'
import {
  getInfectionRate,
  getCriticalRate,
  getTestRate,
  isEmpty,
  getRecoveredRate,
  getDeathsRate,
  getActivedRate,
} from '@utils/utils'
import { COLOR } from '@utils/constant'

interface CountryCircleProgressProps {
  country: FullCountry
}

const RowGraphContainer = styled.div`
  width: 100%;
  max-width: 800px;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 15px 0;
  }
`

const CountryCircleProgress = ({ country }: CountryCircleProgressProps) => {
  const { tests, active, critical, population, cases, recovered, deaths } = country
  const [rate, setRate] = useState<AdditionRate>({
    infectionRate: 0,
    criticalRate: 0,
    testedRate: 0,
    recoveredRate: 0,
    deathsRate: 0,
    activedRate: 0,
  })

  useEffect(() => {
    if (!isEmpty(country)) {
      setRate({
        activedRate: getActivedRate({ active, cases }),
        recoveredRate: getRecoveredRate({ recovered, cases }),
        deathsRate: getDeathsRate({ deaths, cases }),
        infectionRate: getInfectionRate({ tests, cases }),
        criticalRate: getCriticalRate({ critical, active }),
        testedRate: getTestRate({ tests, population }),
      })
    }
  }, [country])

  return (
    <RowGraphContainer>
      <CircleProgress color={COLOR.green} value={rate.recoveredRate} text="Recovery Rate" />
      <CircleProgress color={COLOR.yellow} value={rate.activedRate} text="Actived Rate" />
      <CircleProgress color={COLOR.red} value={rate.deathsRate} text="Death Rate" />

      <CircleProgress
        color="#4daff7"
        value={rate.infectionRate}
        text="Infection Rate"
        description="ratio between confirmed cases and tested cases"
      />
      <CircleProgress
        color="#4daff7"
        value={rate.criticalRate}
        text="Critical Rate"
        description="ratio between critical cases and actived cases"
      />
      <CircleProgress
        color="#4daff7"
        value={rate.testedRate}
        text="Tested Rate"
        description="ratio between tested cases and population"
      />
    </RowGraphContainer>
  )
}

export default CountryCircleProgress
