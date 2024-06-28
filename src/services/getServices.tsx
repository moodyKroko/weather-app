// import axios from 'axios'
import { Coordinates, SearchResults } from '../types'

// const BASE_URL = 'https://api.openweathermap.org/'

// const API_KEY = 'd03603dd86831533506547968f9cdbeb' // process.env.REACT_APP_API_KEY

const getSearchResults = async (query: string): Promise<SearchResults[]> => {
  // const res = await axios.get(
  //   `${BASE_URL}/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
  // )
  // {
  //   "name": "Hounslow",
  //   "lat": 17.9354996,
  //   "lon": -77.7331531,
  //   "country": "JM"
  // }
  // this is for testing purpose
  console.log("Query sent to external API:", query)
  return new Promise(resolve =>
    resolve([
      {
        name: 'Hounslow',
        local_names: {
          ur: 'ہنزلو',
          en: 'Hounslow',
        },
        lat: 51.4686132,
        lon: -0.3613471,
        country: 'GB',
        state: 'England',
      },
      {
        name: 'Hou Hounslow 2 Test',
        local_names: {
          ur: 'ہنزلو',
          en: 'Hounslow',
        },
        lat: 52.4686132,
        lon: -1.3613471,
        country: 'GB',
        state: 'England',
      },
    ])
  )
}

const getWeather = async ({lat, lon}: Coordinates) => {
  console.log("Coordinates from getWeather Request:", lat, lon)

  return new Promise(resolve =>
    resolve([
      {
        coord: {
          lon: 10.99,
          lat: 44.34,
        },
        weather: [
          {
            id: 501,
            main: 'Rain',
            description: 'moderate rain',
            icon: '10d',
          },
        ],
        base: 'stations',
        main: {
          temp: 298.48,
          feels_like: 298.74,
          temp_min: 297.56,
          temp_max: 300.05,
          pressure: 1015,
          humidity: 64,
          sea_level: 1015,
          grnd_level: 933,
        },
        visibility: 10000,
        wind: {
          speed: 0.62,
          deg: 349,
          gust: 1.18,
        },
        rain: {
          '1h': 3.16,
        },
        clouds: {
          all: 100,
        },
        dt: 1661870592,
        sys: {
          type: 2,
          id: 2075663,
          country: 'IT',
          sunrise: 1661834187,
          sunset: 1661882248,
        },
        timezone: 7200,
        id: 3163858,
        name: 'Zocca',
        cod: 200,
      },
    ])
  )
}

export { getSearchResults, getWeather }
