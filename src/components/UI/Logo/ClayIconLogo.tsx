import { Link } from 'react-router-dom'
import ClayIcon, { ClayIconSpriteContext } from '@clayui/icon'
import spritemap from 'assets/images/icons.svg'
import styled from 'styled-components'

export const ClayIconLogoStyled = styled(ClayIcon)`
  width: 3rem;
  height: 3rem;
`

const ClayIconLogo = () => {
  return (
    <Link to="/">
      <ClayIconSpriteContext.Provider value={spritemap}>
        <ClayIconLogoStyled symbol="add-cell" />
      </ClayIconSpriteContext.Provider>
    </Link>
  )
}

export default ClayIconLogo
