import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  img {
    max-width: 100%;
  }

  p {
    &:last-child {
      margin: 0;
    }
  }
`
