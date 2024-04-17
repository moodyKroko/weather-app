import { Text, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

export default function Search(params: {
  query: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}) {
  const icon = <IconSearch />

  return (
    <>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={icon}
        defaultValue={params.query}
        onChange={params.onChange}
        variant="filled"
        size="lg"
        label="Search for a name."
        radius="md"
        placeholder="Enter name of town, city or Country"
      />

      <Text>Debounced value: {params.query}</Text>
    </>
  )
}
