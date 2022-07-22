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
}

interface Host {
  id: string
  name: string
  memberUrl: string
  memberPhoto: Image
}

interface Image {
  baseUrl: string
  id: string
}

interface Edge {
  node: MeetupEvent
}

interface Events {
  count: number
  pageInfo: PageInfo
  edges: Edge[]
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
