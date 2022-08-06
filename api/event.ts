import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Group, MeetupEvent } from 'types'
const groupData = require('../data/data.json')

const GROUP_DATA: Group = (groupData as any).data.groupByUrlname

const _getEvent = (id: string): MeetupEvent => {
  console.log(id)

  const result = GROUP_DATA.filter((obj: { id: string }) => {
    return obj.id === id
  })

  return result
}

const event = (request: VercelRequest, response: VercelResponse): void => {
  response.status(200).json(_getEvent(request.query.id as string))
}

export default event
