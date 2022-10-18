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
  top: 50%;
  left: 15%;
  color: white;
  background-color: rgb(0 0 0 / 60%);
  padding: 32px;
  border-radius: 12px;
`
