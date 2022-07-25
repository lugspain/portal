import { ContentContainer } from 'assets/styles/container'
import PastEvents from 'components/Events/PastEvents/PastEvents'
import Hero from 'components/UI/Hero/Hero'
import { Timeline } from 'react-twitter-widgets'

const Home = () => {
  return (
    <div>
      <Hero />
      <ContentContainer>
        <PastEvents />
        <Timeline
          dataSource={{ sourceType: 'profile', screenName: 'LUGSpain' }}
          options={{ width: '400', height: '600' }}
        />
      </ContentContainer>
    </div>
  )
}

export default Home
