import { ErrorBoundary } from 'react-error-boundary'
import { useInfiniteQuery } from '@tanstack/react-query'
import fetchEvents from 'api/fetchEvents'
import ClayLoadingIndicator from '@clayui/loading-indicator'
import EventGrid from './EventGrid'
import ErrorFallback from 'components/ErrorFallback/ErrorFallback'
import LoadMoreButton from './LoadMoreButton'

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
    getPreviousPageParam: ({ previousPage }) => previousPage,
    getNextPageParam: ({ hasNextPage, nextPage }) =>
      hasNextPage ? nextPage : undefined,
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
            <LoadMoreButton
              hasNextPage={hasNextPage}
              fetchNextPage={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
            />
          </>
        )}
      </ErrorBoundary>
    </>
  )
}

export default PastEvents
