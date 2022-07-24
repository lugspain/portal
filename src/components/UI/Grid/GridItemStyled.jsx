import styled from 'styled-components'

export const GridItemStyled = styled.article`
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 10px 50px #00000012;
  }

  figure {
    margin-bottom: 0;
  }
`

export const GridItemTitle = styled.h2`
  margin: 12px 0;
  min-height: 52px;
`

export const GridItemDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const GridItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const GridItemContentStyled = styled.div`
  padding: 12px;
`
