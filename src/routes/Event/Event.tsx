import { useParams } from 'react-router-dom'

const Event = () => {
  let { event } = useParams()

  return (
    <div>
      <p>I'm the Event</p>
      <p>This are the params: {event}</p>
    </div>
  )
}

export default Event
