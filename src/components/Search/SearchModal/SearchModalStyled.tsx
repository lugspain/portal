import styled from 'styled-components'
import ClayEmptyState from '@clayui/empty-state'
import ClayManagementToolbar from '@clayui/management-toolbar'
import ClayModal from '@clayui/modal'
import { ClayButtonWithIcon } from '@clayui/button'

export const ClayManagementToolbarStyled = styled(ClayManagementToolbar)`
  position: sticky;
  top: 0;
  z-index: 9;
  padding-top: 2.5rem;

  @media ${({ theme }) => theme.devices.tablet} {
    padding-top: 1.5rem;
  }
`

export const ClayModalBodyStyled = styled(ClayModal.Body)`
  max-height: calc(100vh - 24px) !important;
  min-height: calc(100vh - 24px);
  padding-top: 0 !important;

  @media ${({ theme }) => theme.devices.tablet} {
    max-height: 620px !important;
    min-height: 620px;
  }
`

export const ClayEmptyStateStyled = styled(ClayEmptyState)`
  margin: 1.5rem auto;
`
export const ClayButtonWithIconStyled = styled(ClayButtonWithIcon)`
  pointer-events: ${({ value }) => (value ? 'all' : 'none')};
`

export const CloseButtonStyled = styled(ClayButtonWithIcon)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 99;

  @media ${({ theme }) => theme.devices.tablet} {
    display: none;
  }
`
