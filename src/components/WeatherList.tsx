import { Container, Flex, Paper, Skeleton, Text, rem } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getSearchResults } from '../services/getServices'
import { CountryCodes, SearchResults } from '../types'
import { GetFlag } from './GetFlag'
import codes from './codes.json'

import styles from './Weatherlist.module.css'

interface WeatherListProp {
  searchQuery: string
  onRowClick: (queryResult: SearchResults) => void
}

export default function WeatherList({
  searchQuery,
  onRowClick,
}: WeatherListProp) {
  const [countryNames] = useState<CountryCodes>(codes.codes)

  const {
    isLoading,
    isFetching,
    data: cities,
    isError,
    error,
  } = useQuery<SearchResults[]>({
    queryKey: ['searchResults', searchQuery],
    queryFn: () => getSearchResults(searchQuery),
    enabled: Boolean(searchQuery),
    refetchOnWindowFocus: false,
  })

  const renderSkeletons = () => {
    return Array.from({ length: 2 }).map((_, index) => (
      <Container key={index} size="md" mt={16}>
        <Skeleton height={50} />
      </Container>
    ))
  }

  console.log(cities)

  return (
    <Container size="md" w={{ base: '100%', sm: rem(715), md: rem(920) }} p="">
      {cities ? (
        <>
          {cities.map((city, index) => {
            const hasState = city.state !== undefined
            const country = countryNames[city.country.toLowerCase()]

            return (
              <Paper
                key={index}
                shadow="md"
                radius={0}
                p="lg"
                withBorder
                onClick={() => onRowClick(city)}
                className={`${styles.roundedEdges} ${index == 0 ? styles.first : ''} ${index == cities.length - 1 ? styles.last : ''}`}
              >
                <Flex
                  direction={{ base: 'column', sm: 'row' }}
                  justify={{ sm: 'flex-start' }}
                  align={{ base: 'flex-start', sm: 'center' }}
                  gap="md"
                  wrap="wrap"
                >
                  {isFetching ? (
                    <Skeleton height={25} width="25%" />
                  ) : (
                    <Text>{city.name},</Text>
                  )}
                  {hasState && (
                    <>
                      {isFetching ? (
                        <Skeleton height={25} width="25%" />
                      ) : (
                        <Text>{city.state},</Text>
                      )}
                    </>
                  )}
                  {isFetching ? (
                    <Skeleton height={25} width="40%" />
                  ) : (
                    <>
                      <Text>{country}</Text>
                      <GetFlag countryName={city.country} />
                    </>
                  )}
                </Flex>
              </Paper>
            )
          })}
        </>
      ) : isError ? (
        <span> Error: {error.message}</span>
      ) : isLoading ? (
        renderSkeletons()
      ) : null}
    </Container>
  )
}
