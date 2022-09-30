import { MeetupEvent } from 'types'
import { useNavigate } from 'react-router-dom'
import ClayButton from '@clayui/button'

import buildImageUrl from 'utils/build-image-url'
import formatDate from 'utils/format-date'

import { Link } from 'react-router-dom'
import {
  PastEventGridItemStyled,
  PastEventGridItemDescription,
  PastEventGridItemDetails,
  PastEventGridItemContentStyled,
} from './PastEventsGridItemStyled'
import capitalize from 'utils/capitalize'

import { EventDetailsStyled } from 'components/Events/UpcomingEvents/Event/UpcomingEventStyled'

import ClayLabel from '@clayui/label'
import ReactMarkdown from 'react-markdown'

const PastEventsGridItem = ({ item }: IProps) => {
  const navigate = useNavigate()

  return (
    <PastEventGridItemStyled>
      <Link to={`event/${item.id}`}>
        <figure>
          <img src={buildImageUrl(item.image.id)} alt={item.title} />
        </figure>
      </Link>
      <PastEventGridItemContentStyled>
        <Link to={`event/${item.id}`}>
          <h2>{item.title}</h2>
        </Link>
        <EventDetailsStyled>
          <ClayLabel displayType="secondary" large>
            <time>{formatDate(item.dateTime)}</time>
          </ClayLabel>
          <ClayLabel displayType="info" large>
            <span>{capitalize(item.eventType)}</span>
          </ClayLabel>
        </EventDetailsStyled>
        <PastEventGridItemDescription>
          <ReactMarkdown children={item.description} linkTarget="_blank" />
        </PastEventGridItemDescription>
        <PastEventGridItemDetails>
          <ClayButton
            displayType="link"
            small
            onClick={() => navigate(`event/${item.id}`)}
          >
            Ver detalles
          </ClayButton>
        </PastEventGridItemDetails>
      </PastEventGridItemContentStyled>
    </PastEventGridItemStyled>
  )
}

interface IProps {
  children?: React.ReactNode
  item: MeetupEvent
}

export default PastEventsGridItem
