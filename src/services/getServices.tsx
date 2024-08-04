import axios from 'axios'
import { SearchResults, WeatherResult } from '../types'

const BASE_URL = 'https://api.openweathermap.org/'

const API_KEY = import.meta.env.VITE_API_KEY // import.meta.env.VITE_API_KEY

/** call openWeatherApi & geo search the query string for latitude and longitude
* @param query - Input string to call geo location API
* @returns An array of `SearchResults`
*/
const getSearchResults = async (query: string): Promise<SearchResults[]> => {
  const res = await axios.get(
    `${BASE_URL}/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
  )

  console.log('Query sent to external API:', query)
  return res.data
}

/** call openWeatherApi and input lat and lon to get weather result
* @param lat - latitude of the location
* @param lon - longitude of the location
* @returns `WeatherResult` object
*/
const getWeather = async (lat: number, lon: number): Promise<WeatherResult> => {
  const res = await axios.get(
    `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  )

  console.log('Coordinates sent....Requesting weather data.', lat, lon)
  return res.data
}

export { getSearchResults, getWeather }
