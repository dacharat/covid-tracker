import { ReactNode } from 'react'
import styled from 'styled-components'

import NavItem from './NavItem'

const DEFAULT_NAV_WIDTH = 86

interface StyledProps {
  width: number
}
interface NavProps {
  items: any[]
  offset: number
  duration: number
  delay: number
  coverWidth: number
  navWidth: number
  children?: ReactNode[]
}

const Cover = styled.div<StyledProps>`
  padding: 0 20px;
  height: 100%;
  overflow: hidden;
  @media (max-width: 767px) {
    display: none;
  }
`

const CoverItem = styled.ul<StyledProps>`
  justify-content: center;
  margin: 0;
  padding-left: 0;
  position: relative;
  height: 100%;
  display: flex;
  list-style: none;
`

const Nav = ({ items, offset, duration, delay, coverWidth, navWidth }: NavProps) => {
  const finalNavWidth = navWidth ? navWidth : DEFAULT_NAV_WIDTH
  const finalCoverWidth = coverWidth ? coverWidth : items.length * finalNavWidth

  return (
    <Cover width={finalCoverWidth}>
      <CoverItem width={finalCoverWidth}>
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
