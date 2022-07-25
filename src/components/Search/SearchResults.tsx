import styled from 'styled-components'
import { Edge } from 'types'
import ClayEmptyState from '@clayui/empty-state'
import searchImage from 'assets/images/search_state.gif'
import Grid from 'components/UI/Grid/Grid/Grid'

const SearchResultsStyled = styled.section`
  padding: 24px;
`
const SearchResults = ({ results }: IProps) => {
  return (
    <SearchResultsStyled>
      {results?.length ? (
        <Grid items={results} />
      ) : (
        <ClayEmptyState description="" imgSrc={searchImage} title="" />
      )}
    </SearchResultsStyled>
  )
}

interface IProps {
  results?: Edge[]
}

export default SearchResults
