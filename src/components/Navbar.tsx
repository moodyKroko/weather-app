import { Group, Title } from '@mantine/core'
import ToggleColorScheme from './ToggleColorScheme'

import classes from './navbar.module.css'

export default function Navbar() {
  return (
    <header>
      <Group
        className={classes.navbar}
        pos="fixed"
        justify="space-between"
        bg="orange"
        px="lg"
      >
        <Title order={2}>Weather App</Title>
        <ToggleColorScheme />
      </Group>
    </header>
  )
}
