import ErrorFallback from 'components/ErrorFallback/ErrorFallback'
import { useInfiniteQuery } from '@tanstack/react-query'
import fetchEvents from 'api/fetch-events'
import ClayLoadingIndicator from '@clayui/loading-indicator'
import PastEventsGrid from 'components/Events/PastEvents/Grid/PastEventsGrid/PastEventsGrid'
import LoadMoreButton from 'components/Events/LoadMoreButton/LoadMoreButton'
import { PastEventsStyled } from './PastEventsStyled'
import { ClayLoadingIndicatorWrapperStyled } from 'assets/styles/containers'
import { CustomError, Edge } from 'types'

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

  const items: Edge[] = data?.pages.reduce((acc, page) => {
    const items: Edge[] = page.edges || []
    return [...acc, ...items]
  }, [])

  return (
    <PastEventsStyled>
      {status === 'loading' ? (
        <ClayLoadingIndicatorWrapperStyled>
          <ClayLoadingIndicator displayType="secondary" size="sm" />
        </ClayLoadingIndicatorWrapperStyled>
      ) : error ? (
        <ErrorFallback resetCallback={refetch} error={error as CustomError} />
      ) : (
        <>
          {!!items.length && (
            <h2 data-cy="past-events-title">Eventos anteriores</h2>
          )}
          <PastEventsGrid items={items} />
          <LoadMoreButton
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        </>
      )}
    </PastEventsStyled>
  )
}

export default PastEvents
