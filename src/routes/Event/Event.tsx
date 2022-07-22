import { useParams } from 'react-router-dom'

export default function Event() {
  let { event } = useParams()

  return (
    <section className="event">
      <p>I'm the Event</p>
      <p>This are the params: {event}</p>
    </section>
  )
}
