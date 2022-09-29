import ClayLoadingIndicator from '@clayui/loading-indicator'
import { useQuery } from '@tanstack/react-query'
import fetchEvent from 'api/fetch-event'
import { ClayLoadingIndicatorWrapperStyled } from 'assets/styles/containers'
import VideoPlayer from 'components/UI/VideoPlayer/VideoPlayer'
import { Image, Comments } from 'types'
import EventTitle from './EventTitle'
import { ContentContainer } from 'assets/styles/containers'

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
            <VideoPlayer
              comments={comments}
              fallbackImage={image}
              text={description}
              title={title}
            />
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
