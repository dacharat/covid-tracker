import styled from 'styled-components'

interface DataPerMillionBoxProps {
  value: number
  title: string
}
interface TextProps {
  size?: string
}

const Box = styled.div`
  width: 100%;
  border: 1px solid #d6d6d6;
  border-radius: 7px;
  padding: 18px;
`
const Text = styled.p<TextProps>`
  font-size: ${({ size }) => size || '22px'};
  margin: 0px;
  padding: 5px 0;
`

const DataPerMillionBox = ({ value, title }: DataPerMillionBoxProps) => {
  return (
    <Box>
      <Text>{title}</Text>
      <Text>{value}</Text>
      <Text size="12px">Per Million Population</Text>
    </Box>
  )
}

export default DataPerMillionBox
