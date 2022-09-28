import ClayLoadingIndicator from '@clayui/loading-indicator'
import { useQuery } from '@tanstack/react-query'
import fetchEvent from 'api/fetch-event'
import { ClayLoadingIndicatorWrapperStyled } from 'assets/styles/containers'
import VideoPlayer from '../../UI/VideoPlayer/VideoPlayer'

const EventDetail = ({ eventId }: IProps) => {
  const { status, data } = useQuery(['event'], () =>
    fetchEvent({ id: eventId })
  )

  if (!data) {
    return null
  }

  const { description, title, image, comments } = data

  return (
    <>
      {status === 'loading' ? (
        <ClayLoadingIndicatorWrapperStyled>
          <ClayLoadingIndicator displayType="secondary" size="sm" />
        </ClayLoadingIndicatorWrapperStyled>
      ) : (
        <>
          <VideoPlayer
            comments={comments}
            fallbackImage={image}
            text={description}
            title={title}
          />
        </>
      )}
    </>
  )
}

interface IProps {
  eventId: string | undefined
}
export default EventDetail
