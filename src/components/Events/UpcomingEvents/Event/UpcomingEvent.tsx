import { Link, useNavigate } from 'react-router-dom'
import { MeetupEvent } from 'types'
import buildImageUrl from 'utils/build-image-url'
import {
  ImageWrapper,
  UpcomingEventStyled,
  ContentWrapper,
  UpcomingEventGridItemDescription,
  EventDetailsStyled,
} from './UpcomingEventStyled'
import ClayButton from '@clayui/button'
import ClayLabel from '@clayui/label'
import formatDate from 'utils/format-date'
import capitalize from 'utils/capitalize'

const UpcomingEvent = ({
  event: { id, image, title, dateTime, description, eventType },
}: IProps) => {
  const navigate = useNavigate()

  return (
    <UpcomingEventStyled>
      <ImageWrapper>
        <Link to={`event/${id}`}>
          <img src={buildImageUrl(image.id)} alt={title} />
        </Link>
      </ImageWrapper>
      <ContentWrapper>
        <h2>
          <Link to={`event/${id}`}>{title}</Link>
        </h2>
        <EventDetailsStyled>
          <ClayLabel displayType="secondary" large>
            <time>{formatDate(dateTime)}</time>
          </ClayLabel>
          <ClayLabel displayType="info" large>
            <span>{capitalize(eventType)}</span>
          </ClayLabel>
        </EventDetailsStyled>
        <UpcomingEventGridItemDescription>
          {description}
        </UpcomingEventGridItemDescription>
        <ClayButton
          className="p-0"
          displayType="link"
          onClick={() => navigate(`event/${id}`)}
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
