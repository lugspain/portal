import { MeetupEvent, Edge } from 'types'
import GridItem from './GridItem'
import { GridStyled } from './GridStyled'
const Grid = ({ items }: IProps) => {
  if (!items || !items.length) {
    return null
  }

  return (
    <GridStyled>
      {items.map((item) => {
        const { node: meetupEvent }: { node: MeetupEvent } = item

        return <GridItem key={meetupEvent.id} item={meetupEvent} />
      })}
    </GridStyled>
  )
}

interface IProps {
  children?: React.ReactNode
  items: Edge[] | undefined
}

export default Grid
