import ClayLoadingIndicator from '@clayui/loading-indicator'
import { useQuery } from '@tanstack/react-query'
import fetchEvent from 'api/fetch-event'
import { ClayLoadingIndicatorWrapperStyled } from 'assets/styles/containers'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
const EventDetail = ({ eventId }: IProps) => {
  const { status, data } = useQuery(['event'], () =>
    fetchEvent({ id: eventId })
  )

  if (!data) {
    return null
  }

  return (
    <>
      {status === 'loading' ? (
        <ClayLoadingIndicatorWrapperStyled>
          <ClayLoadingIndicator displayType="secondary" size="sm" />
        </ClayLoadingIndicatorWrapperStyled>
      ) : (
        <>
          <VideoPlayer text={data.description} />
        </>
      )}
    </>
  )
}

interface IProps {
  eventId: string | undefined
}
export default EventDetail
