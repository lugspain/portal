import ClayButton from '@clayui/button'
import ClayLoadingIndicator from '@clayui/loading-indicator'
import { LoadMoreButtonStyled } from './LoadMoreButtonStyled'

const LoadMoreButton = ({
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}: IProps) => {
  return (
    <LoadMoreButtonStyled>
      <ClayButton disabled={!hasNextPage} onClick={() => fetchNextPage()}>
        {isFetchingNextPage && (
          <span className="inline-item inline-item-before">
            <ClayLoadingIndicator displayType="secondary" size="sm" light />
          </span>
        )}
        {hasNextPage ? 'Cargar más eventos' : 'No hay más eventos'}
      </ClayButton>
    </LoadMoreButtonStyled>
  )
}

interface IProps {
  fetchNextPage: Function
  hasNextPage: boolean | undefined
  isFetchingNextPage: boolean
}

export default LoadMoreButton
