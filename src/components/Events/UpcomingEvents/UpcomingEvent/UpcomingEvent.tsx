import { MeetupEvent } from 'types'
import buildImageUrl from 'utils/build-image-url'
import { FigureStyled } from './UpcomingEventStyled'

const UpcomingEvent = ({ event }: IProps) => {
  return (
    <article>
      <div>
        <FigureStyled>
          <img src={buildImageUrl(event.image.id)} alt={event.title} />
        </FigureStyled>
      </div>
    </article>
  )
}

interface IProps {
  children?: React.ReactNode
  event: MeetupEvent
}

export default UpcomingEvent
