import { Flex, Text } from '@mantine/core'
import { WeatherResult } from '../types'

interface WeatherCardProps {
  weather: WeatherResult[] | undefined
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  if (!weather) {
    return 
  }

  const weatherRes = weather[0]

  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap="md"
      bg={{ base: 'green', sm: 'yellow' }}
    >
      <Text>Longitude: {weatherRes.coord.lon}</Text>
      <Text>Latitude: {weatherRes.coord.lat}</Text>
      <Text>Weather ID: {weatherRes.weather[0].id}</Text>
      <Text>Weather description: {weatherRes.weather[0].description}</Text>
      <Text>Weather icon: {weatherRes.weather[0].icon}</Text>
      <Text>Weather main: {weatherRes.main.temp}</Text>
      <Text>Weather main: {weatherRes.main.feels_like}</Text>
      <Text>Weather main: {weatherRes.main.temp_min}</Text>
      <Text>Weather main: {weatherRes.main.temp_max}</Text>
      <Text>Weather main: {weatherRes.main.humidity}</Text>
    </Flex>
  )
}
