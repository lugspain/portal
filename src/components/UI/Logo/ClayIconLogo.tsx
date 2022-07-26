import { Link } from 'react-router-dom'
import ClayIcon from '@clayui/icon'
import styled from 'styled-components'

export const ClayIconLogoStyled = styled(ClayIcon)`
  width: 3rem;
  height: 3rem;
`

const ClayIconLogo = () => {
  return (
    <Link to="/">
      <ClayIconLogoStyled symbol="add-cell" />
    </Link>
  )
}

export default ClayIconLogo
