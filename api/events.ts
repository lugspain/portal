import type { VercelRequest, VercelResponse } from '@vercel/node'
const groupData = require('../data/data.json')

const events = (request: VercelRequest, response: VercelResponse): void => {
  const path = (groupData as any).data.groupByUrlname

  response.status(200).json([path.pastEvents, path.upcomingEvents])
}

export default events
