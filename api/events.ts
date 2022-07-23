import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Events, Group } from '../src/types'
const groupData = require('../data/data.json')

const DEFAULT_PAGE_SIZE: number = 8
const GROUP_DATA: Group = (groupData as any).data.groupByUrlname

const _getPastEvents = (pageNumber: number): Events => {
  const nextPage: number = pageNumber + 1
  const previousPage: number = pageNumber - 1

  const pastEvents = [...GROUP_DATA.pastEvents.edges].reverse()

  return {
    ...GROUP_DATA.pastEvents,
    edges: pastEvents.slice(
      pageNumber * DEFAULT_PAGE_SIZE - DEFAULT_PAGE_SIZE,
      pageNumber * DEFAULT_PAGE_SIZE
    ),
    nextPage,
    previousPage,
  }
}

const _getUpcomingEvents = (): Events => {
  const upcomingEvents = GROUP_DATA.upcomingEvents.edges.reverse()

  return {
    ...GROUP_DATA.upcomingEvents,
    edges: upcomingEvents,
  }
}

const events = (request: VercelRequest, response: VercelResponse): void => {
  response
    .status(200)
    .json(
      (request.query.upcomingEvents as string) === 'true'
        ? _getUpcomingEvents()
        : _getPastEvents(Number(request.query.page as string))
    )
}

export default events
