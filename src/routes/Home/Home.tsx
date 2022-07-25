import { ContentContainer } from 'assets/styles/container'
import PastEvents from 'components/Events/PastEvents/PastEvents'
import Hero from 'components/UI/Hero/Hero'

const Home = () => {
  return (
    <div>
      <Hero />
      <ContentContainer>
        <PastEvents />
      </ContentContainer>
    </div>
  )
}

export default Home
