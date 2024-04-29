import { Image } from '@mantine/core'

export const GetFlag = (params: { countryName: string }) => {
  const base_flag_url = `https://flagcdn.com/h24/${params.countryName.toLowerCase()}.png`

  return <Image h={24} w={34} radius="md" src={base_flag_url} />
}
