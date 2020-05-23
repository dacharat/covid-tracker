import { useState } from 'react'
import { Button, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import styled from 'styled-components'

import NavItem from './NavItem'
import { NavProps } from '@interface/v1/props'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`
const HamButton = styled(Button)`
  height: 100%;
  border-width: 0;
  padding: 0 20px;
  display: none;
  @media (max-width: 767px) {
    display: inline;
  }
`
const HamIcon = styled(MenuOutlined)`
  font-size: 20px;
`

const Hamburger = ({ items, offset, duration, delay, navWidth }: NavProps) => {
  const [visible, setVisible] = useState<boolean>(false)

  const handleButtonClick = () => {
    setVisible(true)
  }

  const handleDrawerClose = () => {
    setVisible(false)
  }

  return (
    <>
      <HamButton type="default" onClick={handleButtonClick}>
        <HamIcon />
      </HamButton>
      <Drawer placement="right" closable={false} onClose={handleDrawerClose} visible={visible}>
        <List>
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
        </List>
      </Drawer>
    </>
  )
}

export default Hamburger
