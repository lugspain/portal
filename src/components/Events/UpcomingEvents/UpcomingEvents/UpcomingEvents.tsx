import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from 'components/ErrorFallback/ErrorFallback'
import { useQuery } from '@tanstack/react-query'
import fetchEvents from 'api/fetch-events'

import ClayLoadingIndicator from '@clayui/loading-indicator'
import { ClayLoadingIndicatorWrapperStyled } from 'assets/styles/containers'
import { Edge, MeetupEvent } from 'types'
import UpcomingEvent from '../UpcomingEvent/UpcomingEvent'

const UpcomingEvents = () => {
  const { status, data, error, refetch } = useQuery(['upcomingEvents'], () =>
    fetchEvents({ upcomingEvents: true })
  )

  if (error) {
    throw error
  }

  return (
    <div>
      <h2>Próximos eventos</h2>
      <ErrorBoundary
        onReset={() => {
          refetch()
        }}
        FallbackComponent={ErrorFallback}
      >
        {status === 'loading' ? (
          <ClayLoadingIndicatorWrapperStyled>
            <ClayLoadingIndicator displayType="secondary" size="sm" />
          </ClayLoadingIndicatorWrapperStyled>
        ) : (
          <>
            {data?.edges.map((edge: Edge) => {
              const { node: meetupEvent }: { node: MeetupEvent } = edge

              return <UpcomingEvent key={meetupEvent.id} event={meetupEvent} />
            })}
          </>
        )}
      </ErrorBoundary>
    </div>
  )
}

export default UpcomingEvents
