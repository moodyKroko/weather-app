import { Box, Flex } from '@mantine/core'
import { useDebouncedState } from '@mantine/hooks'
import { useState } from 'react'

import { getWeather } from '../services/getServices'
import { SearchResults, WeatherResult } from '../types'
import Search from './Search'

import WeatherCard from './WeatherCard'
import WeatherList from './WeatherList'

import styles from './Components.module.css'

export default function Hero(): JSX.Element {
  const [debouncedSearch, setDebouncedSearch] = useDebouncedState('', 500)

  const [isQueryClicked, setIsQueryClicked] = useState(false)
  const [clickedQuery, setClickedQuery] = useState<WeatherResult | undefined>()

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedSearch(event.currentTarget.value)
    setIsQueryClicked(false)
  }

  const handleRowClick = (result: SearchResults) => {
    setIsQueryClicked(true)
    getWeather(result.lat, result.lon).then(res => setClickedQuery(res))
  }

  return (
    <>
      <Box component="div" className={styles.topbar}></Box>
      <Flex gap="lg" direction="column">
        <Search query={debouncedSearch} onQueryChange={handleQueryChange} />

        <WeatherList
          searchQuery={debouncedSearch}
          onRowClick={handleRowClick}
        />

        {isQueryClicked &&  (
          <WeatherCard weather={clickedQuery} />
        )}
        <br />
      </Flex>
    </>
  )
}
