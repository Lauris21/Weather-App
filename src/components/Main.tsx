import { Props } from '../types'
import location from '../../public/location-svgrepo-com.svg'
import { useEffect } from 'react'
import Forecast from './Forecast'
import TodayAndMore from './TodayAndMore'
import Date from './Date'

const Main = ({
  locat,
  weather,
  setWeather,
  options,
  handleInput,
  handleClickSearch,
  handleClickOption,
}: Props): JSX.Element => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position
      const { latitude, longitude } = coords
      const lat: number = latitude
      const lon: number = longitude
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${
          import.meta.env.VITE_APP_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          const weatherData = {
            ...data.city,
            list: data.list,
          }
          setWeather(weatherData)
        })
    })

    if (weather === null) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=33.770050&lon=-118.193741&units=metric&appid=${
          import.meta.env.VITE_APP_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          const weatherData = {
            ...data.city,
            list: data.list,
          }
          setWeather(weatherData)
        })
    }
  }, [])

  return (
    <main className="flex flex-col gap-5 items-center min-h-[92vh] bg-violet-400 dark:bg-violet-900 px-4 py-8">
      <div className="w-full flex flex-col sm:flex-row gap-8 dark:text-purple-200 sm:justify-around">
        <section className="relative flex flex-col gap-5 items-center justify-center">
          <div className="m-auto flex flex-col gap-5 items-center justify-center ">
            <div className="relative flex">
              <input
                className="rounded-md w-40 sm:w-56 placeholder:text-violet-600 placeholder:p-2.5 placeholder:bg-violet-200 h-8"
                placeholder="City"
                onChange={handleInput}
              />
              <button
                className="flex justify-center rounded-md border-2 h-8 w-10"
                onClick={handleClickSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 m-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
            <ul className="absolute top-8 bg-blue-500 rounded-md sm:top-20">
              {options.map((option: { name: string }, index: number) => (
                <li key={index}>
                  <button
                    className="text-sm w-full hover:bg-violet-500 hover:text-violet-200 px-2 py-1 cursor-pointer"
                    onClick={() => handleClickOption(option)}
                  >
                    {option.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-row gap-2">
              <img className="w-5" src={location} alt="location icon" />
              {weather !== null && (
                <h2 className="text-lg">
                  {weather.name}
                  <span className="font-extralight">, {weather.country}</span>
                </h2>
              )}
            </div>
          </div>
        </section>
        {weather !== null && <Forecast data={weather} />}
      </div>
      <div className="flex flex-col gap-8 items-center justify-center w-full">
        {weather !== null && <TodayAndMore info={weather} />}
      </div>
    </main>
  )
}
export default Main
