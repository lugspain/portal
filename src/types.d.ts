interface MeetupEvent {
  id: string
  title: string
  eventUrl: string
  description: string
  shortDescription?: string
  hosts: Host[]
  dateTime: string
  eventType: string
  image: Image
  comments: Comments
}

interface MeetupEventExtended extends MeetupEvent {
  notFound: boolean
}

interface Host {
  id: string
  name: string
  memberUrl: string
  memberPhoto: Image
}

export interface Image {
  baseUrl: string
  id: string
}

interface Edge {
  node: MeetupEvent
}

export interface Comments {
  count: number
  edges: CommentEdge[]
}

interface CommentEdge {
  node: Comment
}

interface Comment {
  text: string
}

export interface Events {
  count: number
  pageInfo: PageInfo
  edges: Edge[]
  nextPage: number | null
  previousPage: number | null
  hasNextPage: boolean
}

interface PageInfo {
  endCursor: string
}

interface Group {
  name: string
  description: string
  foundedDate: string
  link: string
  topics: Topic[]
  sponsors: Sponsors
  pastEvents: Events
  upcomingEvents: Events
}

interface Topic {
  name: string
}

interface Sponsors {
  edges: Sponsor[]
}

interface Sponsor {
  node: SponsorNode
}

interface SponsorNode {
  id: string
  name: string
  url: string
  logo: string
}

interface AxiosExtendedError extends AxiosError {
  response: any
  request: any
}

type CustomError = Error & AxiosExtendedError

export interface HistoryLocation {
  pathname: string
  search: string
  hash: string
  state: unknown
  key: string
}
