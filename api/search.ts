import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Edge, MeetupEvent, Group } from '../src/types'
const groupData = require('../data/data.json')

const GROUP_DATA: Group = (groupData as any).data.groupByUrlname

const _getsearchResults = (query: string) => {
  if (!query) {
    return []
  }

  const events: Edge[] = [
    ...GROUP_DATA.upcomingEvents.edges,
    ...JSON.parse(JSON.stringify(GROUP_DATA.pastEvents.edges)).reverse(),
  ]

  return events.filter(({ node: meetupEvent }: { node: MeetupEvent }) => {
    return (
      meetupEvent.title.toLowerCase().includes(query.toLowerCase()) ||
      meetupEvent.description.toLowerCase().includes(query.toLowerCase())
    )
  })
}

const events = (request: VercelRequest, response: VercelResponse): void => {
  response.status(200).json(_getsearchResults(request.query.query as string))
}

export default events
