import type { VercelRequest, VercelResponse } from '@vercel/node'
const groupData = require('../data/data.json')

const events = (request: VercelRequest, response: VercelResponse): void => {
  const pathToEvents = (groupData as any).data.groupByUrlname
  const { query } = request

  const paginationObject: Pagination = JSON.parse(query.pagination as string)

  const { start, delta } = paginationObject

  const pastEvents = pathToEvents.pastEvents.edges.reverse().slice(start, delta)

  const upcomingEvents = pathToEvents.upcomingEvents.edges.reverse() || []

  response.status(200).json({
    pastEvents: {
      ...pathToEvents.pastEvents,
      edges: pastEvents,
    },
    upcomingEvents: {
      ...pathToEvents.upcomingEvents,
      edges: upcomingEvents,
    },
  })
}

export default events

interface Pagination {
  start: number
  delta: number
}
