import styled from 'styled-components'
import theme from 'assets/styles/theme'

const _getScreenMinHeight = (useScreenMinHeight: boolean | undefined): string =>
  useScreenMinHeight
    ? `calc(100vh - (${theme.headerHeight} + ${theme.footerHeight} + ${theme.mainBottomPadding}))`
    : 'auto'

export const ContentContainer = styled.div<{
  padX?: number
  padY?: number
  useScreenMinHeight?: boolean
}>`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: ${({ padX, padY }) => `${padY || 0}px ${padX || 8}px`};
  min-height: ${({ useScreenMinHeight }) =>
    _getScreenMinHeight(useScreenMinHeight)};
`

export const GridContainer = styled.div<{
  alignItems?: string
  columns?: number
  columnTemplate?: string
}>`
  align-items: ${({ alignItems }) => alignItems};
  display: grid;
  grid-gap: 48px 24px;
  grid-template-columns: repeat(1, 1fr);

  @media ${({ theme }) => theme.devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.devices.laptop} {
    grid-template-columns: ${({ columns, columnTemplate }) =>
      columnTemplate || `repeat(${columns || 3}, 1fr)`};
  }
`

export const ClayLoadingIndicatorWrapperStyled = styled.div<{
  useScreenMinHeight?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ useScreenMinHeight }) => (useScreenMinHeight ? '0' : '8rem 0')};
  min-height: ${({ useScreenMinHeight }) =>
    _getScreenMinHeight(useScreenMinHeight)};
`
