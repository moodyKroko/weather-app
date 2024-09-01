import { Image } from '@mantine/core'

interface GetFlagProps {
  countryName: string
}

export const GetFlag = ({ countryName }: GetFlagProps) => {
  const base_flag_url = `https://flagcdn.com/40x30/${countryName.toLowerCase()}.png`

  return <Image h={30} w={40} src={base_flag_url} />
}
