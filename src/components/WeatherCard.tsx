import { Flex } from '@mantine/core'

interface WeatherResultProp {
  weatherResult: string
}

export default function WeatherCard({ weatherResult }: WeatherResultProp) {
  return (
    <Flex bg="teal">
      <p>{weatherResult}</p>
    </Flex>
  )
}
