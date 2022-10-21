import ClayAlert from '@clayui/alert'
import { ContentContainer } from 'assets/styles/containers'
import { useLocation, useNavigate } from 'react-router-dom'
import ClayButton from '@clayui/button'
import { HistoryLocation } from 'types'
import { useEffect } from 'react'
import { useUiContext } from 'context/ui-context'
import pleaseDisperse from 'assets/images/please-disperse.gif'

const PageNotFound = ({ location }: IProps) => {
  const { state }: any = useLocation()
  const { route } = state || {}

  const { pathname } = location || {}

  const navigate = useNavigate()

  const {
    actions: { showSearch, hideSearch },
  } = useUiContext()

  const displayPath: string | undefined = route
    ? route
    : !pathname?.includes('404')
    ? pathname
    : ''

  useEffect(() => {
    hideSearch()

    return () => {
      showSearch()
    }
  }, [hideSearch, showSearch])

  return (
    <div>
      <ContentContainer padY={80} useScreenMinHeight>
        <h1>Error 404</h1>
        <ClayAlert displayType="danger" variant="feedback">
          Página no encontrada
        </ClayAlert>
        {displayPath ? (
          <p>
            La ruta <code>`{displayPath}`</code> no está disponible.
          </p>
        ) : (
          <figure>
            <img src={pleaseDisperse} alt="Nothing to see here" />
          </figure>
        )}
        <div>
          <ClayButton onClick={() => navigate('/')}>Home</ClayButton>
        </div>
      </ContentContainer>
    </div>
  )
}

interface IProps {
  location?: HistoryLocation | undefined
  state?: any
}

export default PageNotFound
