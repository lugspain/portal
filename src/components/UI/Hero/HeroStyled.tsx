import styled from 'styled-components'

export const HeroStyled = styled.section`
  position: relative;

  figure {
    overflow: hidden;
    height: 420px;

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
  background-color: #00000057;
  padding: 32px;
  border-radius: 12px;
`
