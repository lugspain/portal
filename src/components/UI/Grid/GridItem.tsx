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
} from './GridItemStyled'

const GridItem = ({ item }: IProps) => {
  const navigate = useNavigate()

  return (
    <GridItemStyled>
      <figure>
        <img src={buildImageUrl(item.image.id)} alt={item.title} />
      </figure>
      <GridItemContentStyled>
        <Link to={`event/${item.id}`}>
          <GridItemTitle>{item.title}</GridItemTitle>
        </Link>
        <GridItemDescription>{item.description}</GridItemDescription>
        <GridItemDetails>
          <time>{formatDate(item.dateTime)}</time>
          <ClayButton
            displayType="link"
            onClick={() => navigate(`event/${item.id}`)}
          >
            Ver más
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
