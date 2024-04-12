import { Container, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Hero } from './components/Hero'
import { theme } from './theme'

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Container size="md" bg="cyan">
        <Hero />
      </Container>
    </MantineProvider>
  )
}
