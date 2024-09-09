import { Container, Flex, Title } from '@mantine/core'
import ToggleColorScheme from './ToggleColorScheme'

export default function Navbar() {
  return (
    <header>
      <Container size="md" m="auto" p="xs">
        <Flex align="center" justify="space-between" px="xs">
          <Title order={2}>Weather Today</Title>
          <ToggleColorScheme />
        </Flex>
      </Container>
    </header>
  )
}
