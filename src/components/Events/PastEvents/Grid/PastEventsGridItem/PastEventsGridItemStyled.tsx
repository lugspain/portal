import styled from 'styled-components'

export const PastEventGridItemStyled = styled.article`
  border-radius: 4px;
  overflow: hidden;

  &:hover {
    box-shadow: ${({ theme }) => theme.defaultBoxShadowOnHover};
  }

  figure {
    margin-bottom: 0;
  }
`

export const PastEventGridItemTitle = styled.h2`
  margin: 12px 0;
`

export const PastEventGridItemDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const PastEventGridItemDetails = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const PastEventGridItemContentStyled = styled.div`
  padding: 12px 12px 16px; ;
`

export const PastEventTimeStyled = styled.div`
  margin: 12px 0;
`
