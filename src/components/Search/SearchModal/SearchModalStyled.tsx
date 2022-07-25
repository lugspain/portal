import styled from 'styled-components'
import ClayManagementToolbar from '@clayui/management-toolbar'
import ClayModal from '@clayui/modal'

export const ClayManagementToolbarStyled = styled(ClayManagementToolbar)`
  position: sticky;
  top: 0;
  z-index: 9;
  padding-top: 1.5rem;
`

export const ClayModalBodyStyled = styled(ClayModal.Body)`
  max-height: 520px !important;
  padding-top: 0 !important;
`
