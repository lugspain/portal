import { ContentContainer, GridContainer } from 'assets/styles/containers'
import PastEvents from 'components/Events/PastEvents/Main/PastEvents'
import UpcomingEvents from 'components/Events/UpcomingEvents/Main/UpcomingEvents'
import Hero from 'components/UI/Hero/Hero'
import InfoCard from 'components/UI/InfoCard/InfoCard'
import { Timeline } from 'react-twitter-widgets'
import feedbackImage from 'assets/images/feedback.jpg'

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
          <InfoCard
            image={feedbackImage}
            imageAlt="Dar Feedback Liferay USer Group Spain"
            title="¿Tienes alguna sugerencia?"
            description="Si quieres hacernos llegar alguna sugerencia o quieres proponer algún
          tema a tratar, nos encantará recibirlas."
            actions={[
              {
                link: 'https://forms.gle/zJa1NMce2Jgh8HaZA',
                target: '_blank',
                label: 'Buzón de sugerencias',
              },
              {
                link: 'https://forms.gle/3MDtQAV1z3xnLhtN8',
                target: '_blank',
                label: 'Propuesta de charla',
              },
            ]}
          />
          <InfoCard
            image={feedbackImage}
            imageAlt="Dar Feedback Liferay USer Group Spain"
            title="¿Tienes alguna sugerencia?"
            description="Si quieres hacernos llegar alguna sugerencia o quieres proponer algún
          tema a tratar, nos encantará recibirlas."
            actions={[
              {
                link: 'https://forms.gle/zJa1NMce2Jgh8HaZA',
                target: '_blank',
                label: 'Buzón de sugerencias',
              },
              {
                link: 'https://forms.gle/3MDtQAV1z3xnLhtN8',
                target: '_blank',
                label: 'Propuesta de charla',
              },
            ]}
          />
        </GridContainer>
      </ContentContainer>
    </div>
  )
}

export default Home
