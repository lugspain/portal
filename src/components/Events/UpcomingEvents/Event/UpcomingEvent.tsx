import { MeetupEvent } from 'types'
import buildImageUrl from 'utils/build-image-url'
import { FigureStyled, UpcomingEventStyled } from './UpcomingEventStyled'
import ClayLink from '@clayui/link'

const UpcomingEvent = ({ event }: IProps) => {
  return (
    <UpcomingEventStyled>
      <FigureStyled>
        <img src={buildImageUrl(event.image.id)} alt={event.title} />
      </FigureStyled>
      <div>
        <h2>{event.title}</h2>
        <ClayLink href={event.eventUrl} target="_blank">
          Ver evento en Meetup
        </ClayLink>
      </div>
    </UpcomingEventStyled>
  )
}

interface IProps {
  children?: React.ReactNode
  event: MeetupEvent
}

export default UpcomingEvent
