import { Image } from 'types'
import buildImageUrl from 'utils/build-image-url'
import { BannerStyled, TitleStyled } from './EventTitleStyled'
import { ContentContainer } from 'assets/styles/containers'

const EventTitle = ({ image, title }: IProps) => {
  return (
    <BannerStyled>
      <figure>
        <img src={buildImageUrl(image.id)} alt={title} />
      </figure>
      <ContentContainer>
        <TitleStyled>{title}</TitleStyled>
      </ContentContainer>
    </BannerStyled>
  )
}

interface IProps {
  image: Image
  title: string
}

export default EventTitle
