import { Link } from 'react-router-dom'

const EventGrid = ({ events, featureFirst = false }: IProps) => {
  const { edges }: { edges: Edge[] } = events
  return (
    <ul>
      {edges.map((edge) => {
        const { node: item }: { node: MeetupEvent } = edge
        return (
          <li key={item.id}>
            <Link to={`event/${item.id}`}>{item.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

interface IProps {
  children?: React.ReactNode
  events: Events
  featureFirst?: boolean
}

export default EventGrid
