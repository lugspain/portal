import { Link } from 'react-router-dom'
import logo from 'assets/images/logo.svg'
import styled from 'styled-components'

export const LogoStyled = styled.img`
  width: 80px;
`

const Logo = () => {
  return (
    <Link to="/">
      <LogoStyled src={logo} />
    </Link>
  )
}

export default Logo
