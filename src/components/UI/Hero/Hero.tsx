import { DisplayType } from '@clayui/alert'
import groupFoto from 'assets/images/LUG-Spain-group-photo.jpeg'
import { HeroStyled, HeroContent } from './HeroStyled'
import Search from 'components/Search/Search/Search'

const Hero = () => {
  return (
    <HeroStyled>
      <figure>
        <img src={groupFoto} alt="Liferay User Group Spain group" />
      </figure>
      <HeroContent>
        <h2>Liferay User group España</h2>
        <p>El sitio para compartir y aprender sobre Liferay</p>
        <Search
          small
          buttonText="Buscar eventos"
          displayType={'primary' as DisplayType}
        />
      </HeroContent>
    </HeroStyled>
  )
}

export default Hero
