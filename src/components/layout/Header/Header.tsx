import { HeaderStyled } from './HeaderStyled'
import Logo from 'components/UI/Logo/Logo'
import Search from 'components/Search/Search'

const Header = () => (
  <HeaderStyled>
    <div>
      <Logo />
    </div>
    <div>
      <Search buttonText="Buscar eventos..." />
    </div>
  </HeaderStyled>
)

export default Header
