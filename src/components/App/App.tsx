import '@clayui/css/lib/css/atlas.css'
import Header from 'components/Header/Header'
import Main from 'components/Main/Main'
import Footer from 'components/Footer/Footer'

const App = () => (
  <>
    <Header>
      <p>Header child</p>
    </Header>
    <Main>
      <p>Main child</p>
    </Main>
    <Footer>
      <p>Footer child</p>
    </Footer>
  </>
)

export default App
