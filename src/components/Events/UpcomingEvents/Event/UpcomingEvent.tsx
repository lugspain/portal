import { Link, useNavigate } from 'react-router-dom'
import { MeetupEvent } from 'types'
import buildImageUrl from 'utils/build-image-url'
import {
  ImageWrapper,
  UpcomingEventStyled,
  ContentWrapper,
  UpcomingEventGridItemDescription,
} from './UpcomingEventStyled'
import ClayButton from '@clayui/button'

const UpcomingEvent = ({ event }: IProps) => {
  const navigate = useNavigate()

  return (
    <UpcomingEventStyled>
      <ImageWrapper>
        <Link to={`event/${event.id}`}>
          <img src={buildImageUrl(event.image.id)} alt={event.title} />
        </Link>
      </ImageWrapper>
      <ContentWrapper>
        <h2>
          <Link to={`event/${event.id}`}>{event.title}</Link>
        </h2>
        <UpcomingEventGridItemDescription>
          {event.description}
        </UpcomingEventGridItemDescription>
        <ClayButton
          className="p-0"
          displayType="link"
          onClick={() => navigate(`event/${event.id}`)}
        >
          Ver detalles
        </ClayButton>
      </ContentWrapper>
    </UpcomingEventStyled>
  )
}

interface IProps {
  children?: React.ReactNode
  event: MeetupEvent
}

export default UpcomingEvent
