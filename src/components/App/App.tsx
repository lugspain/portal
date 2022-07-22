import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@clayui/css/lib/css/atlas.css'

import Footer from 'components/layout/Footer/Footer'
import Header from 'components/layout/Header/Header'
import Main from 'components/layout/Main/Main'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Header />
    <Main />
    <Footer />
  </QueryClientProvider>
)

export default App
