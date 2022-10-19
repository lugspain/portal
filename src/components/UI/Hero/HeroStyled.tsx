import styled from 'styled-components'

export const HeroStyled = styled.section`
  position: relative;

  figure {
    overflow: hidden;
    height: 220px;

    @media ${({ theme }) => theme.devices.tablet} {
      height: 340px;
    }

    @media ${({ theme }) => theme.devices.laptop} {
      height: 420px;
    }

    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
      object-position: 100% 44%;
    }
  }
`

export const HeroContent = styled.div`
  position: absolute;
  top: 25%;
  left: 2%;
  color: white;
  background-color: rgb(0 0 0 / 60%);
  padding: 12px;
  border-radius: 12px;

  h1 {
    font-size: 1.2rem;
  }
  p {
    font-size: 0.9rem;
  }

  @media ${({ theme }) => theme.devices.mobileL} {
    h1 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media ${({ theme }) => theme.devices.tablet} {
    top: 35%;
    left: 10%;
    padding: 24px;
    font-size: 95%;

    h1 {
      font-size: 1.625rem;
    }
  }

  @media ${({ theme }) => theme.devices.laptop} {
    top: 50%;
    padding: 32px;
    font-size: 100%;
  }
`
