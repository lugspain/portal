import styled from 'styled-components'
import { Edge, MeetupEvent } from 'types'
import { ClayCardWithNavigation } from '@clayui/card'
import spritemap from 'assets/images/icons.svg'
import { useNavigate } from 'react-router-dom'

const SearchResultsStyled = styled.section`
  padding: 8px;

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 24px;
  }
`

const SearchResults = ({ results }: IProps) => {
  const navigate = useNavigate()

  return (
    <SearchResultsStyled>
      {results &&
        results.map((result: Edge) => {
          const { node: item }: { node: MeetupEvent } = result
          return (
            <ClayCardWithNavigation
              key={item.id}
              description={item.description}
              horizontal
              horizontalSymbol="display-content"
              onClick={() => navigate(`event/${item.id}`)}
              onKeyDown={(event) =>
                event.key === 'Enter' && navigate(`event/${item.id}`)
              }
              title={item.title}
              spritemap={spritemap}
            />
          )
        })}
    </SearchResultsStyled>
  )
}

interface IProps {
  results?: Edge[]
}

export default SearchResults
