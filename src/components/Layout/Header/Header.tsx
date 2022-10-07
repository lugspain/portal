import { HeaderStyled } from './HeaderStyled'
import Search from 'components/Search/Search/Search'
import SpainLogo from 'components/UI/Logo/SpainLogo'

const Header = () => (
  <HeaderStyled>
    <div>
      <SpainLogo />
    </div>
    <div>
      <Search buttonText="Buscar eventos" />
    </div>
  </HeaderStyled>
)

export default Header
