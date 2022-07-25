import { ContentContainer, GridContainer } from 'assets/styles/containers'
import PastEvents from 'components/Events/PastEvents/PastEvents'
import UpcomingEvents from 'components/Events/UpcomingEvents/UpcomingEvents'
import Hero from 'components/UI/Hero/Hero'
import Feedback from 'components/UI/Feedback/Feedback'
import { Timeline } from 'react-twitter-widgets'

const Home = () => {
  return (
    <div>
      <Hero />
      <ContentContainer>
        <UpcomingEvents />
        <PastEvents />
        <GridContainer>
          <Timeline
            dataSource={{ sourceType: 'profile', screenName: 'LUGSpain' }}
            options={{ height: '600' }}
          />
          <Feedback />
        </GridContainer>
      </ContentContainer>
    </div>
  )
}

export default Home
