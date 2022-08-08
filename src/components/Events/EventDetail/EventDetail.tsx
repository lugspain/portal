import { useQuery } from '@tanstack/react-query'
import fetchEvent from 'api/fetch-event'
const EventDetail = ({ eventId }: IProps) => {
  const eventDetail = useQuery(['event'], () => fetchEvent({ id: eventId }))

  return (
    <>
      <p>{eventId}</p>
      <pre>{JSON.stringify(eventDetail, undefined, 2)}</pre>
    </>
  )
}

interface IProps {
  eventId: string | undefined
}
export default EventDetail
