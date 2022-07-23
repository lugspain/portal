import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Events, MeetupEvent, Edge } from 'types'

const EventGrid = ({ pages }: IProps) => {
  if (!pages || !pages.length) {
    return null
  }

  return (
    <section>
      {pages.map((events: Events) => (
        <Fragment key={events.nextPage}>
          {events &&
            events.edges.map((edge: Edge) => {
              const { node: meetupEvent }: { node: MeetupEvent } = edge
              return (
                <article
                  style={{
                    border: '1px solid gray',
                    padding: '10px',
                  }}
                  key={meetupEvent.id}
                >
                  <Link to={`event/${meetupEvent.id}`}>
                    {meetupEvent.title}
                  </Link>
                </article>
              )
            })}
        </Fragment>
      ))}
    </section>
  )
}

interface IProps {
  children?: React.ReactNode
  pages: Events[] | undefined
}

export default EventGrid
