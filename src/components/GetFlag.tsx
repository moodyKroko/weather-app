import { Image } from '@mantine/core'

interface GetFlagProps {
  countryName: string
}

export const GetFlag = ({ countryName }: GetFlagProps) => {
  const base_flag_url = `https://flagcdn.com/h24/${countryName.toLowerCase()}.png`

  return <Image h={24} w={34} radius="md" src={base_flag_url} />
}
