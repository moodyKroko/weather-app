import {
  Box,
  Button,
  Container,
  Grid,
  Image,
  NumberFormatter,
  Text,
  Title,
  rem,
} from '@mantine/core'
import { CountryCodes, WeatherResult } from '../types'

import { useState } from 'react'
import styles from './Components.module.css'
import codes from './codes.json'

interface WeatherCardProps {
  weather: WeatherResult | undefined
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  if (weather === undefined || weather === null) {
    return null
  }

  const [countryNames] = useState<CountryCodes>(codes.codes)

  console.log('Weather result:', weather)

  const convertKToC = (kelvin: number) => {
    var tempCelsius = kelvin - 273.15

    return <NumberFormatter value={tempCelsius} decimalScale={2} />
  }

  const {
    name,
    weather: [{ icon, description: iconDescription }],
    main: { temp, feels_like, humidity, temp_max },
    wind: { speed },
    sys: { country },
  } = weather

  const weatherIcon = `https://openweathermap.org/img/wn/${icon}@4x.png`

  return (
    <Box>
      <Container size="md">
        <Container
          className={styles.glassEffect}
          w={{ base: '100%', sm: rem(715), md: rem(920) }}
          p="sm"
        >
          {/* TODO: Have weather icon */}
          {/* TODO: Change the temperature to Celcius */}
          <Grid
            // justify="space-between"
            // mx={{ base: 'sm' }}
            gutter={{ base: 'sm', xs: 'md', md: 'xl', xl: 50 }}
          >
            <Grid.Col mb={{ base: 'sm' }} span={{ base: 12, md: 12, lg: 4 }}>
              <Image
                src={weatherIcon}
                alt={iconDescription}
                w={{ base: rem(150), sm: rem(200) }}
              />
            </Grid.Col>
            <Grid.Col mb={{ base: 'sm' }} span={{ base: 12, md: 12, lg: 4 }}>
              <Box p="lg">
                <Title order={2} fw={700} mb="sm">
                  {name}, {countryNames[country.toLowerCase()]}
                </Title>
                <Text>Temp: {convertKToC(temp)}&deg;C</Text>
                <Text>Feels like: {convertKToC(feels_like)}&deg;C</Text>
                <Text>Humidity: {humidity}</Text>
                <Text>Temp max: {convertKToC(temp_max)}&deg;C</Text>
                <Text>Speed: {speed}</Text>
                <Button variant="light" color="blue" radius="md" mt="sm">
                  Convert
                </Button>
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Container>
    </Box>
  )
}
