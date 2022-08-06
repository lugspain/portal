import { PastEventGridItemDescription } from 'components/Events/PastEvents/Grid/PastEventsGridItem/PastEventsGridItemStyled'
import styled from 'styled-components'

export const UpcomingEventStyled = styled.article`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
  display: flex;

  &:first-of-type {
    margin-top: 24px;
  }
`

export const ImageWrapper = styled.figure`
  margin: 0;
  max-width: 46%;
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
  -webkit-line-clamp: 4;
  line-clamp: 4;
  max-width: 80%;
`
