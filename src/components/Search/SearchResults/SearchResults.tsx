import styled from 'styled-components'
import { Edge, MeetupEvent } from 'types'
import ClayEmptyState from '@clayui/empty-state'
import { ClayCardWithNavigation } from '@clayui/card'
import spritemap from 'assets/images/icons.svg'
import searchImage from 'assets/images/search_state.gif'
import { useNavigate } from 'react-router-dom'

const SearchResultsStyled = styled.section`
  padding: 24px;
`
const SearchResults = ({ results, emptyStateText }: IProps) => {
  const navigate = useNavigate()

  return (
    <SearchResultsStyled>
      {results?.length ? (
        results.map((result: Edge) => {
          const { node: item }: { node: MeetupEvent } = result
          return (
            <ClayCardWithNavigation
              key={item.id}
              description={item.description}
              horizontal
              horizontalSymbol="page"
              onClick={() => navigate(`event/${item.id}`)}
              onKeyDown={(event) =>
                event.key === 'Enter' && navigate(`event/${item.id}`)
              }
              title={item.title}
              spritemap={spritemap}
            />
          )
        })
      ) : (
        <ClayEmptyState
          description=""
          imgSrc={searchImage}
          title={emptyStateText}
        />
      )}
    </SearchResultsStyled>
  )
}

interface IProps {
  results?: Edge[]
  emptyStateText: string
}

export default SearchResults
