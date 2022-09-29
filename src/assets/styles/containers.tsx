import styled from 'styled-components'

export const ContentContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`

export const GridContainer = styled.div<{
  alignItems?: string
  columns?: number
}>`
  align-items: ${({ alignItems }) => alignItems};
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns || 3}, 1fr)`};
  grid-gap: 48px 24px;
`

export const ClayLoadingIndicatorWrapperStyled = styled.div`
  padding: 8rem 0;
`
