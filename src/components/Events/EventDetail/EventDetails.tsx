import ClayLabel from '@clayui/label'
import formatDate from 'utils/format-date'
import capitalize from 'utils/capitalize'
import getEventTypeName, { IOptions } from 'utils/event-type-name'
import ClayLink from '@clayui/link'

const EventDetails = ({ dateTime, eventType, eventUrl }: IEventDetails) => {
  return (
    <div>
      <div>
        <ClayLabel displayType="secondary" large>
          <time>{formatDate(dateTime)}</time>
        </ClayLabel>
      </div>
      <div>
        <ClayLabel displayType="info" large>
          <span>
            {capitalize(getEventTypeName(eventType as keyof IOptions))}
          </span>
        </ClayLabel>
      </div>
      <div className="my-3">
        <ClayLink button displayType="primary" href={eventUrl} target="_blank">
          Ver evento en Meetup
        </ClayLink>
      </div>
    </div>
  )
}

interface IEventDetails {
  dateTime: string
  eventType: string
  eventUrl: string
}

export default EventDetails
