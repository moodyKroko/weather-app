import { Loader, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import React from 'react'

interface WeatherSearchProps {
  query: string
  onQueryChange: React.ChangeEventHandler<HTMLInputElement>
  isLoading: boolean
}

export default function Search({
  query,
  onQueryChange,
  isLoading,
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
      rightSection={isLoading && <Loader size={24} />}
    />
  )
}
