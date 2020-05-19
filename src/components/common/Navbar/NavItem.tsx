import { Link } from 'react-scroll'
import styled from 'styled-components'

interface ListProps {
  width: number
}

const List = styled.li<ListProps>`
  width: ${({ width }) => `${width}px`};
  height: '100%';
  padding: 0 5px;
  transition: background-color 0.5s ease;
  transition: border-bottom 0.5s ease-in-out;
  :hover {
    background-color: #d6d6d6;
    border-bottom: 3px solid #000;
  }
`
const Item = styled(Link)`
  color: #000;
  display: flex;
  padding: 0 10px;
  cursor: pointer;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 100%;
  white-space: normal;
  word-break: break-all;
  :hover {
    color: #000;
  }
`
const Text = styled.p`
  font-size: 20px;
  margin: 0;
  font-weight: 500;
`

const NavItem = ({ item, offset, duration, delay, width }) => {
  return (
    <List width={width}>
      <Item
        to={item.target}
        spy={true}
        smooth={true}
        offset={offset}
        duration={duration}
        isDynamic={true}
        delay={delay}
      >
        <Text>{item.label}</Text>
      </Item>
    </List>
  )
}

export default NavItem
