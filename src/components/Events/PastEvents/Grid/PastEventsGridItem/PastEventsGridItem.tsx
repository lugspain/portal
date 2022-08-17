import { MeetupEvent } from 'types'
import { useNavigate } from 'react-router-dom'
import ClayButton from '@clayui/button'

import buildImageUrl from 'utils/build-image-url'
import formatDate from 'utils/format-date'

import { Link } from 'react-router-dom'
import {
  PastEventGridItemStyled,
  PastEventGridItemTitle,
  PastEventGridItemDescription,
  PastEventGridItemDetails,
  PastEventGridItemContentStyled,
  PastEventTimeStyled,
} from './PastEventsGridItemStyled'

import ClayLabel from '@clayui/label'

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
          <PastEventGridItemTitle>{item.title}</PastEventGridItemTitle>
        </Link>
        <PastEventTimeStyled>
          <ClayLabel displayType="secondary" large>
            <time>{formatDate(item.dateTime)}</time>
          </ClayLabel>
        </PastEventTimeStyled>
        <PastEventGridItemDescription>
          {item.description}
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
