import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Group, MeetupEvent, Edge } from 'types'
const groupData = require('../data/data.json')

const GROUP_DATA: Group = (groupData as any).data.groupByUrlname

const edges: Edge[] = [
  ...GROUP_DATA.upcomingEvents.edges,
  ...GROUP_DATA.pastEvents.edges,
]

const _getEvent = (id: string): MeetupEvent | { notFound: boolean } => {
  return edges.find((event) => event.node.id === id)?.node || { notFound: true }
}

const event = (request: VercelRequest, response: VercelResponse): void => {
  response.status(200).json(_getEvent(request.query.id as string))
}

export default event
