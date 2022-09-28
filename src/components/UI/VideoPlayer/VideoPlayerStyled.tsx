import styled from 'styled-components'

export const IframeWrapperStyled = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const FallbackImageStyled = styled.figure`
  img {
    width: 100%;
  }
`
