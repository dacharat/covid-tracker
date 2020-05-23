import styled from 'styled-components'

const Header = styled.h1`
  margin: 0;
  padding: 0 5px;
`
const Image = styled.img`
  width: 40px;
  height: 40px;
`
const HeaderView = styled.div`
  display: flex;
  flex-direction: row;
`

const Logo = () => {
  return (
    <HeaderView>
      <Image src="https://img.icons8.com/doodle/48/000000/coronavirus.png" />
      <Header>Covid Tracker</Header>
    </HeaderView>
  )
}

export default Logo
