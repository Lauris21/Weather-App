import { useEffect, useState, ChangeEvent } from 'react'
import { OptionType, WeatherType } from '../types'

const useWeather = () => {
  const [locat, setLocat] = useState<string>('')
  const [options, setOptions] = useState([])
  const [city, setCity] = useState<OptionType | null>(null)
  const [weather, setWeather] = useState<WeatherType | null>(null)

  const getOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data))
  }
  const handleInput = (
    e: ChangeEvent<HTMLInputElement>
  ): OptionType[] | undefined => {
    const value = e.target.value.trim()
    setLocat(value)
    if (value === '') return
    getOptions(value)
  }

  const getWeather = (city: OptionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${
        city.lon
      }&units=metric&appid=${import.meta.env.VITE_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const weatherData = {
          ...data.city,
          list: data.list.slice(0, 24),
        }
        setWeather(weatherData)
      })
  }

  const handleClickSearch = () => {
    if (!city) return
    getWeather(city)
  }
  const handleClickOption = (option: OptionType) => {
    setCity(option)
  }
  useEffect(() => {
    if (city) {
      setLocat(city.name)
      setOptions([])
    }
  }, [city])

  return {
    locat,
    options,
    weather,
    setWeather,
    handleInput,
    handleClickSearch,
    handleClickOption,
  }
}

export default useWeather
