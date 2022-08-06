import { PastEventGridItemDescription } from 'components/Events/PastEvents/Grid/PastEventsGridItem/PastEventsGridItemStyled'
import styled from 'styled-components'

export const UpcomingEventStyled = styled.article`
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
  display: flex;

  &:first-of-type {
    margin-top: 24px;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.defaultBoxShadowOnHover};
  }
`

export const ImageWrapper = styled.figure`
  margin: 0;
  max-width: 40%;
  flex-shrink: 0;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
`

export const UpcomingEventGridItemDescription = styled(
  PastEventGridItemDescription
)`
  margin: 16px 0 32px 0;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  max-width: 90%;
`
