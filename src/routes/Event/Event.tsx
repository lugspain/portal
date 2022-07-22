import { useParams } from 'react-router-dom'

const Event = () => {
  let { event } = useParams()

  return (
    <section>
      <p>I'm the Event</p>
      <p>This are the params: {event}</p>
    </section>
  )
}

export default Event
