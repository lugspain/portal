import { useQuery } from '@tanstack/react-query'
import fetchEvent from 'api/fetch-event'
const EventDetail = ({ eventId }: IProps) => {
  const eventDetail = useQuery(['event'], () => fetchEvent({ id: eventId }))
  const targetString: string =
    'Podréis asistir en directo por streaming en [youtube](https://www.youtube.com/watch?v=8BGfDJ1j5-Q).\n\nEn la [página del evento ](https://lugspain.github.io/mesdeqa/) podéis consultar más información sobre las sesiones, las comunidades y los ponentes que participan.'
  const rExp: RegExp = /https:\/\/www\.youtube\.com\/watch\?v=.{11}/
  const result: RegExpMatchArray | null = targetString.match(rExp)

  return (
    <>
      <p>{eventId}</p>
      <p>{result}</p>
      <iframe
        title="myFrame"
        width="560"
        height="315"
        src="https://www.youtube.com/watch?v=JnjxpmPjRTw"
        frameBorder="0"
      ></iframe>
      <pre>{JSON.stringify(eventDetail, undefined, 2)}</pre>
    </>
  )
}

interface IProps {
  eventId: string | undefined
}
export default EventDetail
