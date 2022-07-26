import { HeaderStyled } from './HeaderStyled'
import Search from 'components/Search/Search/Search'
import ClayIconLogo from 'components/UI/Logo/ClayIconLogo'

const Header = () => (
  <HeaderStyled>
    <div>
      <ClayIconLogo />
    </div>
    <div>
      <Search buttonText="Buscar eventos" />
    </div>
  </HeaderStyled>
)

export default Header
