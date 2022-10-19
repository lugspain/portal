import ClayLoadingIndicator from '@clayui/loading-indicator'
import { useIsFetching, useQuery } from '@tanstack/react-query'
import fetchEvent from 'api/fetch-event'
import {
  ClayLoadingIndicatorWrapperStyled,
  GridContainer,
} from 'assets/styles/containers'
import VideoPlayer from 'components/UI/VideoPlayer/VideoPlayer'
import { MeetupEvent } from 'types'
import EventTitle from './EventTitle'
import { ContentContainer } from 'assets/styles/containers'
import ReactMarkdown from 'react-markdown'
import { DescriptionStyled } from './EventDetailStyled'
import EventDetails from './EventDetails'

const EventDetail = ({ eventId }: IProps) => {
  const {
    data = {},
    fetchStatus,
    isFetching,
    isLoading,
    status,
  } = useQuery(['event'], () => fetchEvent({ id: eventId }))

  const globalIsFetching = useIsFetching()

  const globalIsLoading = !!(
    fetchStatus === 'fetching' ||
    status === 'loading' ||
    isFetching ||
    isLoading ||
    globalIsFetching
  )

  const {
    description,
    image,
    title,
    comments,
    dateTime,
    eventType,
    eventUrl,
  }: MeetupEvent = data

  return (
    <>
      {globalIsLoading ? (
        <ClayLoadingIndicatorWrapperStyled useScreenMinHeight>
          <ClayLoadingIndicator displayType="secondary" size="sm" />
        </ClayLoadingIndicatorWrapperStyled>
      ) : (
        <div>
          <EventTitle image={image} title={title} />

          <ContentContainer as="section" padY={50}>
            <GridContainer columnTemplate="75% 25%">
              <DescriptionStyled>
                <ReactMarkdown children={description} linkTarget="_blank" />
              </DescriptionStyled>
              <EventDetails
                dateTime={dateTime}
                eventType={eventType}
                eventUrl={eventUrl}
              />
            </GridContainer>
            <div className="my-5">
              <VideoPlayer
                comments={comments}
                fallbackImage={image}
                text={description}
                title={title}
              />
            </div>
          </ContentContainer>
        </div>
      )}
    </>
  )
}

interface IProps {
  eventId: string | undefined
}
export default EventDetail
