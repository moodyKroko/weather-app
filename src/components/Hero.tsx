import { Container, Stack, Table } from '@mantine/core'
import { useDebouncedCallback, useDebouncedState } from '@mantine/hooks'
import { useState } from 'react'

import { getSearchResults } from '../services/getServices'
import { CountryCodes, SearchResults } from '../types'
import Search from './Search'

import codes from './codes.json'
import { GetFlag } from './GetFlag'

export default function Hero(): JSX.Element {
  const [search, setSearch] = useDebouncedState('', 500)
  const [loading, setLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchResults[]>([])
  const [weatherResult, setWeatherResult] = useState('')

  const [countryNames] = useState<CountryCodes>(codes.codes)

  const handleSearch = useDebouncedCallback(
    async (query: string): Promise<void> => {
      if (query === '' || query.trim().length <= 0) {
        setSearchResults([])
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
    handleSearch(event.currentTarget.value)
  }

  // TODO: when clicked do a get request to get the weather data
  // from given latitude and longitude
  const handleTableRowClick = (result: SearchResults) => {
    console.log('latitude:', result.lat, 'longitude:', result.lon)
    console.log('Query result clicked:', result.name)
    setWeatherResult(result.name)
  }

  const rows = searchResults.map((result, index) => {
    const countryCode = result.country.toLowerCase()

    return (
      <Table.Tr key={index} onClick={() => handleTableRowClick(result)}>
        <Table.Td>{result.name}</Table.Td>
        <Table.Td>{countryNames[countryCode]}</Table.Td>
        <Table.Td>{result.state}</Table.Td>
        <Table.Td>
          <GetFlag countryName={countryCode} />
        </Table.Td>
      </Table.Tr>
    )
  })

  return (
    <>
      <Stack gap="lg">
        <Search
          query={search}
          onQueryChange={handleQueryChange}
          isLoading={loading}
        />

        {/* TODO: export to WeatherList component */}
        <Table highlightOnHover horizontalSpacing="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Country</Table.Th>
              <Table.Th>State</Table.Th>
              <Table.Th>Flag</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>

        {/* TODO: This is a another component that shows the weather result */}
        <p>{weatherResult}</p>
        <br />
      </Stack>
    </>
  )
}
