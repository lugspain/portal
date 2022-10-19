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
  position: absolute;
  padding: 12px;
  top: 25%;
  font-size: 1.2rem;
  max-width: calc(100% - 24px);

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 16px 48px 16px 16px;
    top: 30%;
    font-size: 1.4rem;
  }

  @media ${({ theme }) => theme.devices.laptop} {
    padding: 24px;
    top: 40%;
    font-size: 1.625rem;
  }
`
