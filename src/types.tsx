export type SearchResults = {
  name: string
  local_names: Record<string, string>
  lat: number
  lon: number
  country: string
  state: string
}

export type CountryCodes = {
  [id: string]: string
}

export type Coordinates = {
  lon: number
  lat: number
}

// type WeatherData = {
//   id: number
//   main: string
//   description: string
//   icon: string
// }
//
// type Main = {
//   temp: number
//   feels_like: number
//   temp_min: number
//   temp_max: number
//   pressure: number
//   humidity: number
//   sea_level: number
//   grnd_level: number
// }
//
// type WindInfo = {
//   speed: number
//   deg: number
//   gust: number
// }
//
// export type WeatherResult = {
//   coord: Coordinates
//   weather: WeatherData[]
//   base: string
//   main: Main
//   visibility: number
//   wind: WindInfo
//   rain: {
//     string: number
//   }
//   clouds: {
//     all: number
//   }
//   dt: number
//   sys: {
//     type: number
//     id: number
//     country: string
//     sunrise: number
//     sunset: number
//   }
//   timezone: number
//   id: number
//   name: string
//   cod: number
// }
