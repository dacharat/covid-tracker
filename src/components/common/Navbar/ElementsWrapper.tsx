import React, { ReactNode, CSSProperties } from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'

interface ElementsWrapperProps {
  children?: ReactNode[]
  items: any[]
  style?: CSSProperties
  className?: string
}

const Container = styled.div`
  margin-top: 60px;
`

const ElementsWrapper = ({ children, items, style, className }: ElementsWrapperProps) => (
  <Container>
    {children.map((child: ReactNode, i: number) => (
      <Element style={style} className={className} name={items[i].target} key={i}>
        {child}
      </Element>
    ))}
  </Container>
)

export default ElementsWrapper
