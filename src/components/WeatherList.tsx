import { Flex, Skeleton, Text } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getSearchResults } from '../services/getServices'
import { CountryCodes, SearchResults } from '../types'
import { GetFlag } from './GetFlag'
import codes from './codes.json'

import styles from './Weatherlist.module.css'

interface WeatherListProp {
  searchQuery: string
  onTableRowClick: (queryResult: SearchResults) => void
}

export default function WeatherList({
  searchQuery,
  onTableRowClick,
}: WeatherListProp) {
  const [countryNames] = useState<CountryCodes>(codes.codes)

  const { isLoading, data } = useQuery<SearchResults[]>({
    queryKey: ['searchResults', searchQuery],
    queryFn: () => getSearchResults(searchQuery),
    enabled: Boolean(searchQuery),
  })

  const renderSkeletons = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Skeleton key={index} height={50} />
    ))
  }

  console.log(data)

  return (
    <>
      {isLoading ? (
        <>{renderSkeletons()}</>
      ) : (
        <div>
          {data?.map((place, index) => {
            const isState = place.state === undefined
            const country = countryNames[place.country.toLowerCase()]

            return (
              <div key={index} className={styles.roundedEdges}>
                <Flex
                  direction={{ base: 'column', sm: 'row' }}
                  justify={{ sm: 'flex-start' }}
                  align={{ base: 'flex-start', sm: 'center' }}
                  p="md"
                  gap="md"
                  wrap="wrap"
                >
                  <Text>{place.name},</Text>
                  {isState ? '' : <Text>{place.state},</Text>}
                  <Text>{country}</Text>
                  <GetFlag countryName={place.country} />
                </Flex>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
