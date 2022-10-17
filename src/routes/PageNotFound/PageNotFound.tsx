import ClayAlert from '@clayui/alert'
import { ContentContainer, GridContainer } from 'assets/styles/containers'
import { useNavigate } from 'react-router-dom'
import ClayButton from '@clayui/button'
import { HistoryLocation } from 'types'

const PageNotFound = ({ location }: IProps) => {
  const { pathname } = location
  const navigate = useNavigate()

  return (
    <div>
      <ContentContainer padY={80} useScreenMinHeight>
        <h1>Error 404</h1>
        <ClayAlert displayType="danger" variant="feedback">
          Página no encontrada
        </ClayAlert>
        <p>
          La ruta <code>`{pathname}`</code> no está disponible.
        </p>
        <div>
          <ClayButton onClick={() => navigate('/')}>Home</ClayButton>
        </div>
      </ContentContainer>
    </div>
  )
}

interface IProps {
  location: HistoryLocation
}

export default PageNotFound
