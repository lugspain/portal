import ClayLink from '@clayui/link'
import Modal from 'components/UI/Modal/Modal'

import {
  InfoCardStyled,
  InfoCardContentStyled,
  InfoCardtitleStyled,
  InfoCardImageStyled,
  InfoCardActions,
} from './InfoCardStyled'

const InfoCard = ({ actions, description, image, imageAlt, title }: IProps) => {
  return (
    <InfoCardStyled>
      <figure>
        <InfoCardImageStyled src={image} alt={imageAlt} />
      </figure>
      <InfoCardContentStyled>
        <InfoCardtitleStyled>{title}</InfoCardtitleStyled>
        <p>{description}</p>
        <InfoCardActions>
          {actions.map(({ label, link, target, useModal = false }) =>
            useModal ? (
              <Modal key={link} label={label} link={link} />
            ) : (
              <li key={link}>
                <ClayLink href={link} target={target}>
                  {label}
                </ClayLink>
              </li>
            )
          )}
        </InfoCardActions>
      </InfoCardContentStyled>
    </InfoCardStyled>
  )
}

interface IProps {
  children?: React.ReactNode
  actions: InfoCardAction[]
  description: string
  image: string
  imageAlt: string
  title: string
}

interface InfoCardAction {
  link: string
  target: string
  label: string
  useModal?: boolean
}

export default InfoCard
