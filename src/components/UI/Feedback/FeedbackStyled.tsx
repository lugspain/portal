import styled from 'styled-components'

export const FeedbackStyled = styled.article`
  border-radius: 4px;
  overflow: hidden;

  &:hover {
    box-shadow: ${({ theme }) => theme.defaultBoxShadowOnHover};
  }
`

export const FeedbackContentStyled = styled.div`
  padding: 12px;
`

export const FeedbacktitleStyled = styled.h3`
  margin-bottom: 12px;
`

export const FeedbackImageStyled = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: cover;
`

export const FeedbackActions = styled.div`
  margin-top: 32px;
`
