import styled from 'styled-components'

export const ErrorFallbackStyled = styled.section`
  width: 100%;
  max-width: 420px;
  margin: 3.5rem 0;

  code {
    display: block;

    pre {
      margin-bottom: 0;
    }
  }

  code:first-of-type {
    margin: 24px 0 4px;
  }

  code:last-of-type {
    margin-bottom: 24px;
  }
`
