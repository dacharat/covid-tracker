import { useState, useEffect } from 'react'
import styled from 'styled-components'

import CircleProgress from '@components/common/CircleProgress'
import { AdditionRate } from '@interface/types'
import { FullCountry } from '@interface/props'
import { getInfectionRate, getCriticalRate, getTestRate } from '@utils/utils'

interface AdditionCircleProgressProps {
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

const AdditionCircleProgress = ({ country }: AdditionCircleProgressProps) => {
  const { tests, active, critical, population, cases } = country
  const [rate, setRate] = useState<AdditionRate>({
    infectionRate: 0,
    criticalRate: 0,
    testedRate: 0,
  })

  useEffect(() => {
    if (country) {
      setRate({
        infectionRate: getInfectionRate({ tests, cases }),
        criticalRate: getCriticalRate({ critical, active }),
        testedRate: getTestRate({ tests, population }),
      })
    }
  }, [country])

  return (
    <RowGraphContainer>
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

export default AdditionCircleProgress
