import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons'

import { Container } from './components'

const FooterContainer = styled(Container)`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  box-shadow: 0px -2px 2px -2px #5b5b5b;
  height: 60px;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  width: 100%;
`
const User = styled(UserOutlined)`
  font-size: 25px;
`
const Link = styled.a`
  width: 120px;
  text-align: center;
  :hover {
    text-decoration: underline;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <Link href="https://github.com/dacharat/covid-tracker">Source Code</Link>
        <User />
        <Link href="https://github.com/dacharat/">My Github</Link>
      </Content>
    </FooterContainer>
  )
}

export default Footer
