import ClayAlert from '@clayui/alert'
import { ContentContainer } from 'assets/styles/containers'
import styled from 'styled-components'

const PageNotFound = () => {
  return (
    <div>
      <ContentContainer useScreenMinHeight>
        <ClayAlert>Página no encontrada</ClayAlert>
      </ContentContainer>
    </div>
  )
}

export default PageNotFound
