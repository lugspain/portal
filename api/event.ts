import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Group, MeetupEvent } from 'types'
const groupData = require('../data/data.json')

const GROUP_DATA: Array<any> = (groupData as any).data.groupByUrlname.pastEvents
  .edges

const _getEvent = (id: string): MeetupEvent => {
  console.log(id)

  let node = GROUP_DATA.find((event) => event.node.id === id)
  console.log(node)

  return node
}

const event = (request: VercelRequest, response: VercelResponse): void => {
  response.status(200).json(_getEvent(request.query.id as string))
}

export default event
