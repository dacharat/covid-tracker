import styled from 'styled-components'

import { Container } from '@components/common/components'
import { numberWithCommas } from '@utils/utils'
import { LoadingOutlined } from '@ant-design/icons'

interface CaseDataProps {
  title: string
  value: number
  increase: number
  color: string
}
interface TextProps {
  size: string
  color: string
}

const CaseDataContainer = styled(Container)`
  padding: 10px 0;
`
const Text = styled.p<TextProps>`
  margin: 0;
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  font-weight: 600;
`

const CaseData = ({ title, value, increase, color }: CaseDataProps) => {
  return (
    <CaseDataContainer>
      {value ? (
        <Text size="24px" color={color}>
          {numberWithCommas(value || 0)}
        </Text>
      ) : (
        <Text size="24px" color={color}>
          <LoadingOutlined />
        </Text>
      )}
      <Text size="16px" color="#a6a6a6">
        {title}
      </Text>
      <Text size="12px" color={color}>
        {`${(increase > 0 ? '+' : '') + numberWithCommas(increase || 0)} new case${
          Math.abs(increase) !== 1 && 's'
        }`}
      </Text>
    </CaseDataContainer>
  )
}

export default CaseData
