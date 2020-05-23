import styled from 'styled-components'

import Nav from './Nav'
import ElementsWrapper from './ElementsWrapper'
import Hamburger from './Hamburger'
import { NavViewProps, NavBarProps } from '@interface/v1/props'

const NavView = styled.div<NavViewProps>`
  height: ${({ height }) => (height ? `${height}px` : '70px')};
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '#fff')};
  display: flex;
  justify-content: center;
  box-shadow: 0px 5px 5px -5px #5b5b5b;
`
const Header = styled.div`
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const NavViewChild = styled.div`
  width: 100%;
  max-width: 1350px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const Navbar = ({
  items,
  offset,
  duration,
  delay,
  height,
  backgroundColor,
  coverWidth,
  navWidth,
  header,
}: NavBarProps) => {
  const finalOffset = offset ? offset : -80
  const finalDuration = duration ? duration : 500
  const finalDelay = delay ? delay : 0

  return (
    <NavView height={height} backgroundColor={backgroundColor}>
      <NavViewChild>
        <Header>
          <a href="/">{header}</a>
        </Header>

        <Nav
          items={items}
          offset={finalOffset}
          duration={finalDuration}
          delay={finalDelay}
          coverWidth={coverWidth}
          navWidth={navWidth}
        />
        <Hamburger
          items={items}
          offset={finalOffset}
          duration={finalDuration}
          delay={finalDelay}
          coverWidth={coverWidth}
          navWidth={navWidth}
        />
      </NavViewChild>
    </NavView>
  )
}

export default Navbar
export { ElementsWrapper }
