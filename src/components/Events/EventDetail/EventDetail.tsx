import { useQuery } from '@tanstack/react-query'
import fetchEvent from 'api/fetch-event'
const EventDetail = ({ eventId }: IProps) => {
  const eventDetail = useQuery(['todos'], () => fetchEvent({ id: eventId }))

  return <p>{eventId}</p>
}

interface IProps {
  eventId: string | undefined
}
export default EventDetail
