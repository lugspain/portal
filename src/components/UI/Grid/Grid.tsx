import { Link } from 'react-router-dom'
import { MeetupEvent, Edge } from 'types'

const Grid = ({ items }: IProps) => {
  if (!items || !items.length) {
    return null
  }

  return (
    <section>
      {items.map((item) => {
        const { node: meetupEvent }: { node: MeetupEvent } = item
        return (
          <article
            style={{
              border: '1px solid gray',
              padding: '10px',
            }}
            key={meetupEvent.id}
          >
            <Link to={`event/${meetupEvent.id}`}>{meetupEvent.title}</Link>
          </article>
        )
      })}
    </section>
  )
}

interface IProps {
  children?: React.ReactNode
  items: Edge[] | undefined
}

export default Grid
