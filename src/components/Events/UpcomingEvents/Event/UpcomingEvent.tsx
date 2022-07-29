import { useNavigate } from 'react-router-dom'
import { MeetupEvent } from 'types'
import buildImageUrl from 'utils/build-image-url'
import { FigureStyled, UpcomingEventStyled } from './UpcomingEventStyled'
import ClayButton from '@clayui/button'

const UpcomingEvent = ({ event }: IProps) => {
  const navigate = useNavigate()

  return (
    <UpcomingEventStyled>
      <FigureStyled>
        <img src={buildImageUrl(event.image.id)} alt={event.title} />
      </FigureStyled>
      <div>
        <h2>{event.title}</h2>
        <ClayButton onClick={() => navigate(`event/${event.id}`)}>
          Ver más
        </ClayButton>
      </div>
    </UpcomingEventStyled>
  )
}

interface IProps {
  children?: React.ReactNode
  event: MeetupEvent
}

export default UpcomingEvent
