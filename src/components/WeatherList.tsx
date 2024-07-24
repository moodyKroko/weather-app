import { Table } from '@mantine/core'
import { useState } from 'react'
import { CountryCodes, SearchResults } from '../types'
import { GetFlag } from './GetFlag'
import codes from './codes.json'

interface WeatherListProp {
  querySearchResult: SearchResults[]
  onTableRowClick: (queryResult: SearchResults) => void
}

export default function WeatherList({
  querySearchResult,
  onTableRowClick,
}: WeatherListProp) {
  const [countryNames] = useState<CountryCodes>(codes.codes)

  const rows = querySearchResult.map((result, index: number) => {
    const countryCode = result.country.toLowerCase()

    return (
      <Table.Tr key={index} onClick={() => onTableRowClick(result)}>
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
    // TODO: Make it responsive to mobile 
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
  )
}
