import styled from 'styled-components'

import NavItem from './NavItem'
import { NavProps } from '@interface/props'

const DEFAULT_NAV_WIDTH = 86

const Cover = styled.div`
  padding: 0 20px;
  height: 100%;
  overflow: hidden;
  @media (max-width: 767px) {
    display: none;
  }
`

const CoverItem = styled.ul`
  justify-content: center;
  margin: 0;
  padding-left: 0;
  position: relative;
  height: 100%;
  display: flex;
  list-style: none;
`

const Nav = ({ items, offset, duration, delay, navWidth }: NavProps) => {
  return (
    <Cover>
      <CoverItem>
        {items.map((item, i) => (
          <NavItem
            key={i}
            item={item}
            offset={offset}
            duration={duration}
            delay={delay}
            width={navWidth}
          />
        ))}
      </CoverItem>
    </Cover>
  )
}

export default Nav
