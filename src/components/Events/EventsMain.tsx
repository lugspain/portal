import { useQuery } from '@tanstack/react-query'
import fetchEvents from 'api/fetchEvents'

const EventsMain = () => {
  const { data, error, isError, isLoading } = useQuery(['events'], fetchEvents)

  const [pastEvents, upcomingEvents] = data

  return (
    <section>
      <p>total: {pastEvents.count}</p>
    </section>
  )
}

export default EventsMain
