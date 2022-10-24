import { ContentContainer, GridContainer } from 'assets/styles/containers'
import PastEvents from 'components/Events/PastEvents/Main/PastEvents'
import UpcomingEvents from 'components/Events/UpcomingEvents/Main/UpcomingEvents'
import Hero from 'components/UI/Hero/Hero'
import InfoCard from 'components/UI/InfoCard/InfoCard'

import feedbackImage from 'assets/images/feedback.jpg'
import qaMonthImage from 'assets/images/mes-de-qa.jpg'
import TwitterTimeline from 'components/TwitterTimeline/TwitterTimeline'

const Home = () => {
  return (
    <div>
      <Hero />
      <ContentContainer>
        <UpcomingEvents />
        <PastEvents />
        <GridContainer>
          <TwitterTimeline />
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
            image={qaMonthImage}
            imageAlt="Dar Feedback Liferay USer Group Spain"
            title="Junio 2021, el mes de QA"
            description="4 sesiones para profundizar y aprender en esta área mediante experiencias de sus ponentes."
            actions={[
              {
                link: 'https://www.youtube.com/watch?v=_Xhu8Bv2qS4',
                label: 'Sesión 1: Mesa redonda',
                target: '_blank',
                useModal: true,
              },
              {
                link: 'https://www.youtube.com/watch?v=0_TgZZCo3zA',
                label: 'Sesión 2: QA en Liferay',
                target: '_blank',
                useModal: true,
              },
              {
                link: 'https://www.youtube.com/watch?v=8BGfDJ1j5-Q',
                label: 'Sesión 3: The path to automation heaven',
                target: '_blank',
                useModal: true,
              },
              {
                link: 'https://www.youtube.com/watch?v=Q_44Zulmu0s',
                label: 'Sesión 4: Pruebas con Zahorí',
                target: '_blank',
                useModal: true,
              },
            ]}
          />
        </GridContainer>
      </ContentContainer>
    </div>
  )
}

export default Home
