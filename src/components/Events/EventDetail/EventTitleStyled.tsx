import styled from 'styled-components'

export const BannerStyled = styled.section`
  position: relative;

  figure {
    height: 275px;
    overflow: hidden;
  }

  img {
    filter: blur(3px);
    height: 110%;
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
`

export const TitleStyled = styled.h1`
  background: white;
  padding: 24px;
  position: absolute;
  top: 40%;
`
