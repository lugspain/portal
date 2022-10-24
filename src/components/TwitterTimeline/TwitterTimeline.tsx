import { Timeline } from 'react-twitter-widgets'
import ClayLoadingIndicator from '@clayui/loading-indicator'
import styled from 'styled-components'
import { useState } from 'react'

const TimelineWrapperStyled = styled.div<{ isLoading: boolean }>`
  height: ${({ isLoading }) => (isLoading ? 0 : '100%')};
  overflow: ${({ isLoading }) => (isLoading ? 'hidden' : 'unset')};
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  transition: all 0.25s ease-out;

  iframe {
    max-width: 100%;
  }
`

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: 1;

  @media ${({ theme }) => theme.devices.laptop} {
    order: 0;
  }
`

const TwitterTimeline = () => {
  const [twitterIsLoading, setTwitterIsLoading] = useState(true)
  const handleTwitterLoad = (): void => {
    setTimeout(() => setTwitterIsLoading(false), 500)
  }

  return (
    <FlexWrap>
      {twitterIsLoading && (
        <ClayLoadingIndicator displayType="secondary" size="sm" />
      )}
      <TimelineWrapperStyled isLoading={twitterIsLoading}>
        <Timeline
          dataSource={{ sourceType: 'profile', screenName: 'LUGSpain' }}
          onLoad={handleTwitterLoad}
          options={{ height: '490' }}
        />
      </TimelineWrapperStyled>
    </FlexWrap>
  )
}

export default TwitterTimeline
