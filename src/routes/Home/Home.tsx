import { ContentContainer, GridContainer } from 'assets/styles/containers'
import PastEvents from 'components/Events/PastEvents/Main/PastEvents'
import UpcomingEvents from 'components/Events/UpcomingEvents/UpcomingEvents/UpcomingEvents'
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
            options={{ height: '490' }}
          />
          <Feedback />
        </GridContainer>
      </ContentContainer>
    </div>
  )
}

export default Home
