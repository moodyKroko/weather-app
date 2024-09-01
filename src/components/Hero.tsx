import { Stack } from '@mantine/core'
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

  const [isLoading, setIsLoading] = useState(false)

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedSearch(event.currentTarget.value)
  }

  const handleTableRowClick = (result: SearchResults) => {
    setIsQueryClicked(true)
    getWeather(result.lat, result.lon).then(res => setClickedQuery(res))
  }

  return (
    <>
      <Stack gap="lg">
        <Search
          query={debouncedSearch}
          onQueryChange={handleQueryChange}
          isLoading={isLoading}
        />

          <WeatherList
            searchQuery={debouncedSearch}
            onTableRowClick={handleTableRowClick}
          />

        {debouncedSearch && isQueryClicked && (
          <WeatherCard weather={clickedQuery} />
        )}
        <br />
      </Stack>
    </>
  )
}
