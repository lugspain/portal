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

export const PastEventGridItemDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  margin: 16px 0 24px 0;

  p {
    margin-bottom: 0;
  }
`

export const PastEventGridItemDetails = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const PastEventGridItemContentStyled = styled.div`
  padding: 12px 12px 16px; ;
`
