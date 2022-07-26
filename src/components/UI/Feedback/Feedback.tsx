import ClayLink from '@clayui/link'
import feedbackImage from 'assets/images/feedback.jpg'
import {
  FeedbackStyled,
  FeedbackContentStyled,
  FeedbacktitleStyled,
  FeedbackImageStyled,
} from './FeedbackStyled'

const Feedback = () => {
  return (
    <FeedbackStyled>
      <figure>
        <FeedbackImageStyled src={feedbackImage} alt="Dar feedback" />
      </figure>
      <FeedbackContentStyled>
        <FeedbacktitleStyled>¿Tienes alguna sugerencia?</FeedbacktitleStyled>
        <p>
          Si quieres hacernos llegar alguna sugerencia o quieres proponer algún
          tema a tratar, nos encantará recibirlas.
        </p>
        <p>
          <ClayLink href="https://forms.gle/zJa1NMce2Jgh8HaZA" target="_blank">
            Buzón de sugerencias
          </ClayLink>
        </p>
        <p>
          <ClayLink href="https://forms.gle/3MDtQAV1z3xnLhtN8" target="_blank">
            Propuesta de charla
          </ClayLink>
        </p>
      </FeedbackContentStyled>
    </FeedbackStyled>
  )
}

export default Feedback
