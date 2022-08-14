import ClayLoadingIndicator from '@clayui/loading-indicator'
import { useQuery } from '@tanstack/react-query'
import fetchEvent from 'api/fetch-event'
import { ClayLoadingIndicatorWrapperStyled } from 'assets/styles/containers'
const EventDetail = ({ eventId }: IProps) => {
  const { status, data } = useQuery(['event'], () =>
    fetchEvent({ id: eventId })
  )

  if (data) {
    const rExp: RegExp = /https:\/\/www\.youtube\.com\/watch\?v=.{11}/
    const result: RegExpMatchArray | null = data.description.match(rExp)
    var resultString: string | undefined = result?.pop()
    var replace = /watch\?v=/gi
    resultString = resultString?.replace(replace, 'embed/')
  }

  return (
    <>
      {status === 'loading' ? (
        <ClayLoadingIndicatorWrapperStyled>
          <ClayLoadingIndicator displayType="secondary" size="lg" />
        </ClayLoadingIndicatorWrapperStyled>
      ) : (
        <>
          <p>{eventId}</p>
          <p>{resultString}</p>
          <iframe
            title="myFrame"
            width="560"
            height="315"
            src={resultString}
            frameBorder="0"
          ></iframe>
          <pre>{JSON.stringify(data.description, undefined, 2)}</pre>
        </>
      )}
    </>
  )
}

interface IProps {
  eventId: string | undefined
}
export default EventDetail
