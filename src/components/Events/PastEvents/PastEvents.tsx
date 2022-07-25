import { ErrorBoundary } from 'react-error-boundary'
import { useInfiniteQuery } from '@tanstack/react-query'
import fetchEvents from 'api/fetch-events'
import ClayLoadingIndicator from '@clayui/loading-indicator'
import Grid from 'components/UI/Grid/Grid/Grid'
import ErrorFallback from 'components/ErrorFallback/ErrorFallback'
import LoadMoreButton from 'components/Events/LoadMoreButton/LoadMoreButton'
import { H1Styled } from 'assets/styles/titles'

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
    getNextPageParam: ({ hasNextPage, nextPage }) =>
      hasNextPage ? nextPage : undefined,
    staleTime: STALE_TIME_IN_MINUTES * 60 * 1000,
  })

  if (error) {
    throw error
  }

  const items = data?.pages.reduce((acc, page) => {
    const items = page.edges || []
    return [...acc, ...items]
  }, [])

  return (
    <>
      <H1Styled>Eventos anteriores</H1Styled>
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
            <Grid items={items} />
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
