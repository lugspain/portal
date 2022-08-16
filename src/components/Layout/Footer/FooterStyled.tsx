import styled from 'styled-components'

export const FooterStyled = styled.footer`
  background-color: var(--gray-dark);
  min-height: 60px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: end;

  figure {
    margin: 0;
    text-align: right;
  }
`

export const FooterIconStyled = styled.img`
  height: 24px;
  width: 24px;
  filter: invert(1);
`
