import { ChangeEvent } from 'react'

export interface OptionType {
  name: string
  lat: number
  lon: number
}

export interface Props {
  locat: string
  weather: WeatherType
  setWeather: () => void
  options: []
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void
  handleClickSearch: () => void
  handleClickOption: (option: OptionType) => void
}

export interface DataProps {
  data: WeatherType
}

export interface InfoProps {
  info: WeatherType
}

export interface Info {
  forecastToday: [
    {
      dt_txt: string
      dt: number
      main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
      }
      weather: [
        {
          main: string
          icon: string
          description: string
        }
      ]
      wind: {
        deg: number
        gust: number
        speed: number
      }
      clouds: {
        all: number
      }
      pop: number
      visibility: number
    }
  ]
}

export interface ForecastToday {
  dt_txt: string
  dt: number
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }
  weather: [
    {
      main: string
      icon: string
      description: string
    }
  ]
  wind: {
    deg: number
    gust: number
    speed: number
  }
  clouds: {
    all: number
  }
  pop: number
  visibility: number
}

export interface WeatherType {
  name: string
  country: string
  sunrise: number
  sunset: number
  timezone: number
  list: [
    {
      dt_txt: string
      dt: number
      main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
      }
      weather: [
        {
          main: string
          icon: string
          description: string
        }
      ]
      wind: {
        deg: number
        gust: number
        speed: number
      }
      clouds: {
        all: number
      }
      pop: number
      visibility: number
    }
  ]
}

export interface SunTime {
  sunrise: string
  sunset: string
}

export interface DateToday {
  weekDay: string
  day: string
  month: string
  year: string
}

export type TempDay = Record<string, number | string>
