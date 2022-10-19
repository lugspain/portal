import ClayLabel from '@clayui/label'
import formatDate from 'utils/format-date'
import capitalize from 'utils/capitalize'
import getEventTypeName, { IOptions } from 'utils/event-type-name'
import ClayLink from '@clayui/link'
import styled from 'styled-components'

const EventDetailsStyled = styled.div`
  order: -1;
  margin-bottom: 24px;

  @media ${({ theme }) => theme.devices.tablet} {
    order: 1;
    margin-bottom: 0;
  }
`

const EventDetails = ({ dateTime, eventType, eventUrl }: IEventDetails) => {
  return (
    <EventDetailsStyled>
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
    </EventDetailsStyled>
  )
}

interface IEventDetails {
  dateTime: string
  eventType: string
  eventUrl: string
}

export default EventDetails
