import { ForecastToday, InfoProps, WeatherType } from '../types'
import InfoToday from './InfoToday'
import NextHours from './NextHours'
import SunriseSunset from './SunriseSunset'
import NextDays from './NextDays'
import { hour, getSunTime } from '../utils/getDate'

const TodayAndMore = ({ info }: InfoProps): JSX.Element => {
  const forecastToday: ForecastToday[] = info.list
  const weather: WeatherType = info
  const currentHour = hour(weather.list[0].dt_txt)

  const sunrise: string = getSunTime(info.sunrise)
  const sunset: string = getSunTime(info.sunset)

  const formatNumber = (string: string): number => {
    const splitTime: string[] = string.split(':')
    const newFormat: string = `${splitTime[0]}.${splitTime[1]}`
    return Number(newFormat)
  }
  if (
    Number(currentHour[1]) > formatNumber(sunset) &&
    Number(currentHour[1]) < formatNumber(sunrise)
  ) {
    localStorage.theme = 'light'
  } else {
    localStorage.theme = 'dark'
    console.log(currentHour[1], formatNumber(sunset))
  }
  return (
    <>
      <div className="p-1.5 bg-purple-300 bg-opacity-20">
        <p className="flex flex-row gap-5 dark:text-purple-100 opacity-90 text-sm sm:text-base">
          {currentHour[0]}
          {/* <span>{currentHour[1]}.</span> */}
        </p>
      </div>
      <SunriseSunset sunset={sunset} sunrise={sunrise} />
      <div className="flex flex-row gap-5 items-center justify-center w-full bg-white/20 opacity-80 rounded-md sm:justify-center max-w-screen-lg">
        <InfoToday info={info} />
      </div>
      <NextHours forecastToday={forecastToday} />
      <NextDays forecastToday={forecastToday} />
    </>
  )
}
export default TodayAndMore
