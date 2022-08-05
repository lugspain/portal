import EventDetail from 'components/Events/EventDetail/EventDetail'
import { useParams } from 'react-router-dom'

const Event = () => {
  let { event } = useParams()

  return (
    <div>
      <EventDetail eventId={event} />
    </div>
  )
}

export default Event
