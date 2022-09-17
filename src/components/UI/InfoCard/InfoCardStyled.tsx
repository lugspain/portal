import styled from 'styled-components'

export const InfoCardStyled = styled.article`
  border-radius: 4px;
  overflow: hidden;

  &:hover {
    box-shadow: ${({ theme }) => theme.defaultBoxShadowOnHover};
  }
`

export const InfoCardContentStyled = styled.div`
  padding: 12px;
`

export const InfoCardtitleStyled = styled.h3`
  margin-bottom: 12px;
`

export const InfoCardImageStyled = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: cover;
`

export const InfoCardActions = styled.ul`
  margin-top: 24px;
  list-style: none;
  padding: 0;

  li {
    &:not(:first-child) {
      margin-top: 8px;
    }
  }
`
