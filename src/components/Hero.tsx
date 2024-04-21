import { useDebouncedState } from '@mantine/hooks'
import Search from './Search'
import weather from './weather.json'

export default function Hero() {
  console.log(JSON.stringify(weather, null, 4))
  const [search, setSearch] = useDebouncedState('', 500)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
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
      <Search query={search} onChange={handleChange} />
      <pre>{JSON.stringify(weather, null, 4)}</pre>
      <div>Test</div>
    </>
  )
}
