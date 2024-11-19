import { Center, Container, Grid, Image, Paper, Text, rem } from '@mantine/core'
import { WeatherResult } from '../types'

interface WeatherCardProps {
  weather: WeatherResult | undefined
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  if (weather === undefined || weather === null) {
    return null
  }

  console.log('Weather result:', weather)

  const {
    name,
    weather: [{ icon, description: iconDescription }],
    main: { temp, feels_like, humidity, temp_max },
    wind: { speed },
    sys: { country },
  } = weather

  const weatherIcon = `https://openweathermap.org/img/wn/${icon}@4x.png`

  return (
    <Container
      size="md"
      w={{ base: '100%', sm: rem(715), md: rem(920) }}
      p=""
      bg="rgba(150, 167, 176, 0.2)"
    >
      {/* TODO: Have weather icon */}
      {/* TODO: Change the temperature to Celcius */}
      <Grid
        // justify="space-between"
        // mx={{ base: 'sm' }}
        gutter={{ base: 'sm', xs: 'md', md: 'xl', xl: 50 }}
      >
        <Grid.Col
          // bg="cyan"
          mb={{ base: 'sm' }}
          span={{ base: 12, md: 12, lg: 4 }}
        >
          <Paper shadow="sm" radius="md" p="lg">
            <Text>{name}</Text>
            <Center>
              <Image
                radius="md"
                w={150}
                src={weatherIcon}
                alt={iconDescription}
              />
            </Center>
          </Paper>
        </Grid.Col>
        <Grid.Col
          // bg="red"
          mb={{ base: 'sm' }}
          span={{ base: 12, md: 12, lg: 4 }}
        >
          <Paper shadow="sm" radius="md" p="lg">
            <Text>Temp: {temp}K</Text>
            <Text>Feels like: {feels_like}K</Text>
            <Text>Humidity: {humidity}</Text>
            <Text>Temp max: {temp_max}</Text>
            <Text>Speed: {speed}</Text>
            <Text>Country: {country}</Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
