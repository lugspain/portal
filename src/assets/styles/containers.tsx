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
  padding: ${({ padX, padY }) => `${padY || 0}px ${padX || 0}px`};
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
  grid-template-columns: ${({ columns }) => `repeat(${columns || 3}, 1fr)`};
  grid-gap: 48px 24px;
  grid-template-columns: ${({ columnTemplate }) => columnTemplate};
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
