import { Box, Container, Flex, Paper, Skeleton, Text, rem } from '@mantine/core'
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
}: WeatherListProp) {
  const [countryNames] = useState<CountryCodes>(codes.codes)

  const { isPending, isFetching, data } = useQuery<SearchResults[]>({
    queryKey: ['searchResults', searchQuery],
    queryFn: () => getSearchResults(searchQuery),
    enabled: Boolean(searchQuery),
    refetchOnWindowFocus: false,
  })

  const renderSkeletons = () => {
    return Array.from({ length: 2 }).map((_, index) => (
      <Skeleton key={index} height={50} mt="1rem" />
    ))
  }

  console.log(data)

  const ifNotQueryAndPending = searchQuery !== '' && isPending

  return (
    <Container size="md" w={{ base: '100%', sm: rem(715), md: rem(920) }} p="">
      {ifNotQueryAndPending ? (
        <>{renderSkeletons()}</>
      ) : (
        <Box mt="md">
          {data?.map((place, index) => {
            const haveState = place.state === undefined
            const country = countryNames[place.country.toLowerCase()]

            return (
              <Paper
                key={index}
                shadow="md"
                radius={0}
                p="lg"
                withBorder
                className={`${styles.roundedEdges} ${index == 0 ? styles.first : ''} ${index == data.length - 1 ? styles.last : ''}`}
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
                    <Text>{place.name},</Text>
                  )}
                  {haveState ? (
                    ''
                  ) : (
                    <>
                      {isFetching ? (
                        <Skeleton height={25} width="25%" />
                      ) : (
                        <Text>{place.state},</Text>
                      )}
                    </>
                  )}
                  {isFetching ? (
                    <Skeleton height={25} width="40%" />
                  ) : (
                    <>
                      <Text>{country}</Text>
                      <GetFlag countryName={place.country} />
                    </>
                  )}
                </Flex>
              </Paper>
            )
          })}
        </Box>
      )}
    </Container>
  )
}
