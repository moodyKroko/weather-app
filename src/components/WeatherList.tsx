import {
  Box,
  Container,
  Flex,
  Paper,
  Skeleton,
  Text,
  rem,
  useMantineColorScheme,
} from '@mantine/core'
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
      <Skeleton key={index} height={50} mt={6} />
    ))
  }

  const { colorScheme } = useMantineColorScheme()
  const containerColorChange = colorScheme === 'light' ? 'white' : '#1f1f1f'

  console.log(containerColorChange)
  console.log(data)

  return (
    <Container size="md" w={{ base: '100%', sm: rem(750), md: rem(920) }} p="">
      {isLoading ? (
        <>{renderSkeletons()}</>
      ) : (
        <Box mt="md">
          {data?.map((place, index) => {
            const isState = place.state === undefined
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
                  <Text>{place.name},</Text>
                  {isState ? '' : <Text>{place.state},</Text>}
                  <Text>{country}</Text>
                  <GetFlag countryName={place.country} />
                </Flex>
              </Paper>
            )
          })}
        </Box>
      )}
    </Container>
  )
}
