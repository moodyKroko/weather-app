import {
  ActionIcon,
  Group,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'
import clsx from 'clsx'

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

function ToggleColorScheme() {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  })

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
      }
      variant="gradient"
      size={42}
      radius="md"
      gradient={{ from: 'blue', to: 'teal', deg: 90 }}
      aria-label="Toggle color  scheme"
    >
      <IconSun className={clsx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={clsx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  )
}
