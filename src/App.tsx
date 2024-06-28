import { Container, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { theme } from './theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App(): JSX.Element {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <main>
          <Container pt={90} size="md" bg="cyan">
            <Hero />
          </Container>
        </main>
      </QueryClientProvider>
    </MantineProvider>
  )
}
