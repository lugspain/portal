import { ContentContainer } from 'assets/styles/containers'
import { FooterIconStyled, FooterStyled } from './FooterStyled'
import githubIcon from 'assets/images/github-icon.svg'

const GITHUB_REPO_URL = 'https://github.com/lugspain/portal'

const Footer = () => (
  <FooterStyled>
    <ContentContainer>
      <div>
        <figure>
          <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer">
            <FooterIconStyled src={githubIcon} alt="Github" />
          </a>
        </figure>
      </div>
    </ContentContainer>
  </FooterStyled>
)

export default Footer
