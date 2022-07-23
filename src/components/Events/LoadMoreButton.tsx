import ClayButton from '@clayui/button'
import ClayLoadingIndicator from '@clayui/loading-indicator'

const LoadMoreButton = ({
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}: IProps) => {
  return (
    <ClayButton
      disabled={!hasNextPage}
      displayType="primary"
      onClick={() => fetchNextPage()}
    >
      {isFetchingNextPage && (
        <span className="inline-item inline-item-before">
          <ClayLoadingIndicator displayType="secondary" size="sm" light />
        </span>
      )}
      Ver más
    </ClayButton>
  )
}

interface IProps {
  fetchNextPage: Function
  hasNextPage: boolean | undefined
  isFetchingNextPage: boolean
}

export default LoadMoreButton
