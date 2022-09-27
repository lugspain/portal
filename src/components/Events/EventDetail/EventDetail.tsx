import ClayLoadingIndicator from '@clayui/loading-indicator'
import { useQuery } from '@tanstack/react-query'
import fetchEvent from 'api/fetch-event'
import { ClayLoadingIndicatorWrapperStyled } from 'assets/styles/containers'
import VideoPlayer from 'components/UI/VideoPlayer/VideoPlayer'

const EventDetail = ({ eventId }: IProps) => {
  const { status, data } = useQuery(['event'], () =>
    fetchEvent({ id: eventId })
  )

  if (!data) {
    return null
  }

  const {
    description,
    image,
    title,
  }: { description: string; image: Image; title: string; comments: IComments } =
    data

  return (
    <>
      {status === 'loading' ? (
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
