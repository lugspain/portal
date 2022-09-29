import ClayLoadingIndicator from '@clayui/loading-indicator'
import { useQuery } from '@tanstack/react-query'
import fetchEvent from 'api/fetch-event'
import {
  ClayLoadingIndicatorWrapperStyled,
  GridContainer,
} from 'assets/styles/containers'
import VideoPlayer from 'components/UI/VideoPlayer/VideoPlayer'
import { Image, Comments } from 'types'
import EventTitle from './EventTitle'
import { ContentContainer } from 'assets/styles/containers'
import ReactMarkdown from 'react-markdown'

const EventDetail = ({ eventId }: IProps) => {
  const { data, isFetching } = useQuery(['event'], () =>
    fetchEvent({ id: eventId })
  )

  if (!data) {
    return null
  }

  const {
    description,
    image,
    title,
    comments,
  }: { description: string; image: Image; title: string; comments: Comments } =
    data

  return (
    <>
      {isFetching ? (
        <ClayLoadingIndicatorWrapperStyled>
          <ClayLoadingIndicator displayType="secondary" size="sm" />
        </ClayLoadingIndicatorWrapperStyled>
      ) : (
        <div>
          <EventTitle image={image} title={title} />

          <ContentContainer>
            <GridContainer columns={2} alignItems="center">
              <div>
                <ReactMarkdown children={description} linkTarget="_blank" />
              </div>
              <VideoPlayer
                comments={comments}
                fallbackImage={image}
                text={description}
                title={title}
              />
            </GridContainer>
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
