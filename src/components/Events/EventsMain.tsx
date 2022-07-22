import ClayLoadingIndicator from '@clayui/loading-indicator'

import { useQuery } from '@tanstack/react-query'
import fetchEvents from 'api/fetchEvents'

import EventGrid from './EventGrid'

const EventsMain = () => {
  const {
    data = {},
    error,
    isError,
    isLoading,
  } = useQuery(['events'], () => fetchEvents({ start: 0 }))

  const { pastEvents, upcomingEvents } = data

  return (
    <section>
      {isLoading ? (
        <ClayLoadingIndicator displayType="secondary" size="sm" />
      ) : (
        <>
          <EventGrid featureFirst events={upcomingEvents} />
          <EventGrid events={pastEvents} />
        </>
      )}
    </section>
  )
}

export default EventsMain

interface EventsData {
  pastEvents: Events
  upcomingEvents: Events
}
