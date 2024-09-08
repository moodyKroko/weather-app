import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { theme } from './theme'

const queryClient = new QueryClient()

export default function App(): JSX.Element {

  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <main>
          <Hero />
        </main>
      </QueryClientProvider>
    </MantineProvider>
  )
}
