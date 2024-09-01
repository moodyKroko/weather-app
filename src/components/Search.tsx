import { TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import React from 'react'

interface WeatherSearchProps {
  query: string
  onQueryChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function Search({
  query,
  onQueryChange,
}: WeatherSearchProps): JSX.Element {
  const icon = <IconSearch />

  return (
    <TextInput
      leftSectionPointerEvents="none"
      leftSection={icon}
      defaultValue={query}
      onChange={onQueryChange}
      variant="filled"
      size="lg"
      radius="md"
      placeholder="Enter name of town or city"
    />
  )
}
