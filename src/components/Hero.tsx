import { Box, Container, Flex, rem, useMantineColorScheme } from '@mantine/core'
import { useDebouncedState } from '@mantine/hooks'
import { useState } from 'react'

import { getWeather } from '../services/getServices'
import { SearchResults, WeatherResult } from '../types'
import Search from './Search'

import WeatherCard from './WeatherCard'
import WeatherList from './WeatherList'

export default function Hero(): JSX.Element {
  const [debouncedSearch, setDebouncedSearch] = useDebouncedState('', 500)

  const [isQueryClicked, setIsQueryClicked] = useState(false)
  const [clickedQuery, setClickedQuery] = useState<WeatherResult>()

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedSearch(event.currentTarget.value)
  }

  const handleTableRowClick = (result: SearchResults) => {
    setIsQueryClicked(true)
    getWeather(result.lat, result.lon).then(res => setClickedQuery(res))
  }

  const { colorScheme } = useMantineColorScheme()
  const containerColorChange = colorScheme === 'light' ? 'white' : '#1f1f1f'

  return (
    <>
      <Box component="div" bg={containerColorChange}></Box>
      <Flex gap="lg" direction="column">
        <Container w={{ base: rem(380), sm: rem(750), md: rem(950) }} pt={46}>
          <Search query={debouncedSearch} onQueryChange={handleQueryChange} />
        </Container>

        <WeatherList
          searchQuery={debouncedSearch}
          onTableRowClick={handleTableRowClick}
        />

        {debouncedSearch && isQueryClicked && (
          <WeatherCard weather={clickedQuery} />
        )}
        <br />
      </Flex>
    </>
  )
}
