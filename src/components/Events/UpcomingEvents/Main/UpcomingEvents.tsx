import ErrorFallback from 'components/ErrorFallback/ErrorFallback'
import { useQuery } from '@tanstack/react-query'
import fetchEvents from 'api/fetch-events'

import ClayLoadingIndicator from '@clayui/loading-indicator'
import { ClayLoadingIndicatorWrapperStyled } from 'assets/styles/containers'
import { CustomError, Edge, MeetupEvent } from 'types'
import UpcomingEvent from '../Event/UpcomingEvent'
import { UpcomingEventsStyled } from './UpcomingEventsStyled'

const UpcomingEvents = () => {
  const { status, data, error, refetch } = useQuery(['upcomingEvents'], () =>
    fetchEvents({ upcomingEvents: true })
  )

  return (
    <UpcomingEventsStyled>
      <h2>Próximos eventos</h2>
      {status === 'loading' ? (
        <ClayLoadingIndicatorWrapperStyled>
          <ClayLoadingIndicator displayType="secondary" size="sm" />
        </ClayLoadingIndicatorWrapperStyled>
      ) : error ? (
        <ErrorFallback resetCallback={refetch} error={error as CustomError} />
      ) : (
        <>
          {data?.edges.map((edge: Edge) => {
            const { node: meetupEvent }: { node: MeetupEvent } = edge

            return <UpcomingEvent key={meetupEvent.id} event={meetupEvent} />
          })}
        </>
      )}
    </UpcomingEventsStyled>
  )
}

export default UpcomingEvents
