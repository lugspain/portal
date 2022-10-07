import styled from 'styled-components'

export const HeaderStyled = styled.header`
  height: ${({ theme }) => theme.headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`
