import { Avatar } from '@mantine/core'

interface GetFlagProps {
  countryName: string
}

export const GetFlag = ({ countryName }: GetFlagProps) => {
  const base_flag_url = `https://flagcdn.com/h24/${countryName.toLowerCase()}.png`

  return <Avatar radius="sm" src={base_flag_url} />
}
