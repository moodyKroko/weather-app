import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core'

import { IconMoon, IconSun } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ToggleColorScheme() {
  const { toggleColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  })

  const darkGradient = { from: 'indigo.5', to: 'violet.9', deg: 90 }
  const lightGradient = { from: 'orange', to: 'pink', deg: 90 }

  const currentGradient =
    computedColorScheme === 'light' ? darkGradient : lightGradient

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={computedColorScheme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.19 }}
      >
        <ActionIcon
          onClick={toggleColorScheme}
          variant="gradient"
          size={38}
          radius="md"
          mt={4}
          gradient={currentGradient}
          aria-label="Toggle color scheme"
        >
          {computedColorScheme === 'light' ? (
            <IconMoon size="1.5rem" stroke={1.8} />
          ) : (
            <IconSun size="1.5rem" stroke={1.8} />
          )}
        </ActionIcon>
      </motion.div>
    </AnimatePresence>
  )
}
