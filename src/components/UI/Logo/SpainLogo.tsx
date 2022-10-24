import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkStyled = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`

export const LogoStyled = styled.div`
  height: 48px;
  width: 48px;
  background-color: var(--primary);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: white;
    line-height: 0;
    font-size: 54px;
    position: relative;
    top: -3px;
  }
`

const Logo = () => {
  return (
    <LinkStyled to="/" data-cy="logo">
      <LogoStyled>
        <span>~</span>
      </LogoStyled>
    </LinkStyled>
  )
}

export default Logo
