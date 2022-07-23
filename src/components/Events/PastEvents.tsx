import ClayButton from '@clayui/button'
import { ErrorBoundary } from 'react-error-boundary'
import { useInfiniteQuery } from '@tanstack/react-query'
import fetchEvents from 'api/fetchEvents'
import ClayLoadingIndicator from '@clayui/loading-indicator'
import EventGrid from './EventGrid'
import ErrorFallback from 'components/ErrorFallback/ErrorFallback'

const STALE_TIME_IN_MINUTES: number = 10

const PastEvents = () => {
  const {
    status,
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery(['pastEvents'], fetchEvents, {
    getPreviousPageParam: (firstPage) => firstPage.previousPage,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    staleTime: STALE_TIME_IN_MINUTES * 60 * 1000,
  })

  if (error) {
    throw error
  }

  return (
    <>
      <ErrorBoundary
        onReset={() => {
          refetch()
        }}
        FallbackComponent={ErrorFallback}
      >
        {status === 'loading' ? (
          <ClayLoadingIndicator displayType="secondary" size="sm" />
        ) : (
          <>
            <EventGrid pages={data?.pages} />
            <ClayButton displayType="primary" onClick={() => fetchNextPage()}>
              {isFetchingNextPage && (
                <span className="inline-item inline-item-before">
                  <ClayLoadingIndicator
                    displayType="secondary"
                    size="sm"
                    light
                  />
                </span>
              )}
              Ver más
            </ClayButton>
          </>
        )}
      </ErrorBoundary>
    </>
  )
}

export default PastEvents
