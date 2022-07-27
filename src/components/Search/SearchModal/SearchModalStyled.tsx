import styled from 'styled-components'
import ClayEmptyState from '@clayui/empty-state'
import ClayManagementToolbar from '@clayui/management-toolbar'
import ClayModal from '@clayui/modal'
import { ClayButtonWithIcon } from '@clayui/button'

export const ClayManagementToolbarStyled = styled(ClayManagementToolbar)`
  position: sticky;
  top: 0;
  z-index: 9;
  padding-top: 1.5rem;
`

export const ClayModalBodyStyled = styled(ClayModal.Body)`
  max-height: 580px !important;
  min-height: 580px;
  padding-top: 0 !important;
`

export const ClayEmptyStateStyled = styled(ClayEmptyState)`
  margin: 1.5rem auto;
`
export const ClayButtonWithIconStyled = styled(ClayButtonWithIcon)`
  pointer-events: ${({ value }) => (value ? 'all' : 'none')};
`
