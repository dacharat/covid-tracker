import { ArrowUpOutlined, ArrowDownOutlined, LoadingOutlined } from '@ant-design/icons'
import styled, { keyframes } from 'styled-components'

import { Container } from '@components/common/components'
import { numberWithCommas } from '@utils/utils'
import { CaseTextProps, CountryCaseCardProps } from '@interface/props'

const bounce = keyframes`
  0%,
  25%,
  50%,
  75%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-5px);
  }
`
const CaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px 0;
`
const Card = styled(Container)`
  padding: 7px 10px;
  background: ${({ color }) => (color ? color : '#000')};
  border-radius: 20px;
  min-width: 160px;
  margin: 10px;
  @media (max-width: 550px) {
    margin: 2px;
    min-width: 0;
  }
`
const CaseText = styled.p<CaseTextProps>`
  font-weight: 600;
  font-size: ${({ size }) => (size ? size : 'calc(15px + 12 * ((100vw - 200px) / (1300)))')};
  color: #fff;
  margin: 0;
`
const Text = styled.p`
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  color: #a6a6a6;
  margin: 5px 0;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
  @media (max-width: 680px) {
    font-size: 18px;
  }
`
const ArrowUp = styled(ArrowUpOutlined)`
  svg {
    animation: ${bounce} 1.5s infinite;
  }
`
const ArrowDown = styled(ArrowDownOutlined)`
  svg {
    animation: ${bounce} 1.5s infinite;
  }
`

const CountryCaseCard = ({
  title = 'empty',
  increment = 0,
  totalCase,
  cardColor,
  caseFontSize,
  increaseFontSize,
}: CountryCaseCardProps) => {
  const getPrefix = () => {
    if (increment > 0) {
      return <ArrowUp />
    } else if (increment < 0) {
      return <ArrowDown />
    } else {
      return null
    }
  }

  return (
    <Card color={cardColor}>
      <Text>{title}</Text>
      <CaseContainer>
        {totalCase ? (
          <>
            <CaseText size={caseFontSize}>{numberWithCommas(totalCase)}</CaseText>
            <CaseText size={increaseFontSize}>
              {getPrefix()}
              {` ${increment === 0 ? '-' : numberWithCommas(Math.abs(increment))}`}
            </CaseText>
          </>
        ) : (
          <CaseText size="35px">
            <LoadingOutlined />
          </CaseText>
        )}
      </CaseContainer>
    </Card>
  )
}

export default CountryCaseCard
