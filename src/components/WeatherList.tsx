import { Skeleton, Table, Text } from '@mantine/core'
import { useState } from 'react'
import { CountryCodes, SearchResults } from '../types'
import { GetFlag } from './GetFlag'
import codes from './codes.json'
import { getSearchResults } from '../services/getServices'
import { useQuery } from '@tanstack/react-query'

interface WeatherListProp {
  searchQuery: string
  onTableRowClick: (queryResult: SearchResults) => void
}

export default function WeatherList({
  searchQuery,
  onTableRowClick,
}: WeatherListProp) {
  const [countryNames] = useState<CountryCodes>(codes.codes)

  const { isPending, isLoading, data } = useQuery<SearchResults[]>({
    queryKey: ['searchResults', searchQuery],
    queryFn: () => getSearchResults(searchQuery),
    enabled: Boolean(searchQuery),
  })

  console.log('Query loading before undefined check:', isLoading)
  console.log('Query loading before undefined check:', isPending)

  console.log(data)

  return (
    <>
      {/* const countryCode = result.country.toLowerCase() */}
      {/* const { name, state } = result */}
      <Text>fasdfs</Text>
    </>
  )
}
