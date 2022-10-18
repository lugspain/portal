import { HeaderStyled } from './HeaderStyled'
import Search from 'components/Search/Search/Search'
import SpainLogo from 'components/UI/Logo/SpainLogo'
import { useUiContext } from 'context/ui-context'

const Header = () => {
  const { state } = useUiContext()

  return (
    <HeaderStyled>
      <div>
        <SpainLogo />
      </div>
      {state?.showSearch && (
        <div>
          <Search buttonText="Buscar eventos" />
        </div>
      )}
    </HeaderStyled>
  )
}

export default Header
