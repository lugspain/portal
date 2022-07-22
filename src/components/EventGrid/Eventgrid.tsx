import { QueryClient, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient()

const EventGrid = () => {
  // const query = useQuery('events', fetchTodos)

  return (
    <section>
      <p>I'm the Event grid</p>
    </section>
  )
}

export default EventGrid
