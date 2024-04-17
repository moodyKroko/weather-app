import { useDebouncedState } from '@mantine/hooks'
import Search from './Search'
import weather from './weather.json'
import { ChangeEvent } from 'react'

export default function Hero() {
  console.log(JSON.stringify(weather, null, 4))
  const [query, setQuery] = useDebouncedState('', 500)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value)
  }

  // include these
  // {
  //   "id": 501,
  //   "main": "Rain",
  //   "description": "moderate rain",
  //   "icon": "10d"
  // }
  // "main": {
  //     "temp": 298.48,
  //     "feels_like": 298.74,
  //     "temp_min": 297.56,
  //     "temp_max": 300.05,
  //     "pressure": 1015,
  //     "humidity": 64,
  //     "sea_level": 1015,
  //     "grnd_level": 933
  // },
  return (
    <>
      <Search query={query} onChange={handleInputChange} />
      <pre>{JSON.stringify(weather, null, 4)}</pre>
      <div>Test</div>
    </>
  )
}
