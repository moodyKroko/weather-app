import { Stack } from '@mantine/core'
import { useDebouncedCallback, useDebouncedState } from '@mantine/hooks'
import { useState } from 'react'

import { getSearchResults, getWeather } from '../services/getServices'
import { SearchResults, WeatherResult } from '../types'
import Search from './Search'

import WeatherCard from './WeatherCard'
import WeatherList from './WeatherList'

export default function Hero(): JSX.Element {
  const [search, setSearch] = useDebouncedState('', 500)
  const [loading, setLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchResults[]>([])

  const [isQueryClicked, setIsQueryClicked] = useState(false)
  const [clickedQuery, setClickedQuery] = useState<WeatherResult>()

  const handleSearchInput = useDebouncedCallback(
    async (query: string): Promise<void> => {
      if (query === '' || query.trim().length <= 0) {
        setSearchResults([])
        setIsQueryClicked(false)
      }

      if (query.length != 0) {
        setLoading(true)
        setSearchResults(await getSearchResults(query.trim()))
        setLoading(false)
      }
    },
    1000
  )

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
    handleSearchInput(event.currentTarget.value)
  }

  const handleTableRowClick = (result: SearchResults) => {
    setIsQueryClicked(true)
    getWeather(result.lat, result.lon).then(res => setClickedQuery(res))
  }

  return (
    <>
      <Stack gap="lg">
        <Search
          query={search}
          onQueryChange={handleQueryChange}
          isLoading={loading}
        />

        <WeatherList
          querySearchResult={searchResults}
          onTableRowClick={handleTableRowClick}
        />

        {isQueryClicked && <WeatherCard weather={clickedQuery} />}
        <br />
      </Stack>
    </>
  )
}
