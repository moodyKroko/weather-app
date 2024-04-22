import { Container, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { theme } from './theme'

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Navbar />
      <main>
        <Container pt={90} size="md" bg="cyan">
          <Hero />
        </Container>
      </main>
    </MantineProvider>
  )
}
