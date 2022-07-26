import { MeetupEvent } from 'types'
import { useNavigate } from 'react-router-dom'
import ClayButton from '@clayui/button'

import buildImageUrl from 'utils/build-image-url'
import formatDate from 'utils/format-date'

import { Link } from 'react-router-dom'
import {
  GridItemStyled,
  GridItemTitle,
  GridItemDescription,
  GridItemDetails,
  GridItemContentStyled,
  TimeStyled,
} from './GridItemStyled'

import ClayLabel from '@clayui/label'

const GridItem = ({ item }: IProps) => {
  const navigate = useNavigate()

  return (
    <GridItemStyled>
      <Link to={`event/${item.id}`}>
        <figure>
          <img src={buildImageUrl(item.image.id)} alt={item.title} />
        </figure>
      </Link>
      <GridItemContentStyled>
        <Link to={`event/${item.id}`}>
          <GridItemTitle>{item.title}</GridItemTitle>
        </Link>
        <TimeStyled>
          <ClayLabel displayType="secondary" large>
            <time>{formatDate(item.dateTime)}</time>
          </ClayLabel>
        </TimeStyled>
        <GridItemDescription>{item.description}</GridItemDescription>
        <GridItemDetails>
          <ClayButton small onClick={() => navigate(`event/${item.id}`)}>
            Ver meetup
          </ClayButton>
        </GridItemDetails>
      </GridItemContentStyled>
    </GridItemStyled>
  )
}

interface IProps {
  children?: React.ReactNode
  item: MeetupEvent
}

export default GridItem
