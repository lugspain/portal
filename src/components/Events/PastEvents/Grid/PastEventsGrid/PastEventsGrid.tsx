import { MeetupEvent, Edge } from 'types'
import PastEventsGridItem from '../PastEventsGridItem/PastEventsGridItem'
import { PastEventsGridStyled } from './PastEventsGridStyled'
const PastEventsGrid = ({ items }: IProps) => {
  if (!items || !items.length) {
    return null
  }

  return (
    <PastEventsGridStyled>
      {items.map((item: Edge) => {
        const { node: meetupEvent }: { node: MeetupEvent } = item

        return <PastEventsGridItem key={meetupEvent.id} item={meetupEvent} />
      })}
    </PastEventsGridStyled>
  )
}

interface IProps {
  children?: React.ReactNode
  items: Edge[] | undefined
}

export default PastEventsGrid
