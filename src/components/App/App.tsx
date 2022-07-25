import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import '@clayui/css/lib/css/atlas.css'

import Footer from 'components/Layout/Footer/Footer'
import Header from 'components/Layout/Header/Header'
import Main from 'components/Layout/Main/Main'

import GlobalStyles from 'assets/styles/global'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const App = () => (
  <>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <Header />
      <Main />
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>
)

export default App
