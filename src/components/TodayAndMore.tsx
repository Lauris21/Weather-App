import { InfoProps } from '../types'
import InfoToday from './InfoToday'
import NextHours from './NextHours'
import SunriseSunset from './SunriseSunset'

const TodayAndMore = ({ info }: InfoProps): JSX.Element => {
  const forecastToday = info.list

  const getSunTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000)
    let hours: string = date.getHours().toString()
    let minutes = date.getMinutes().toString()

    if (hours.length <= 1) hours = `0${hours}`
    if (minutes.length <= 1) minutes = `0${minutes}`

    return `${hours}:${minutes}`
  }
  const sunrise: string = getSunTime(info.sunrise)
  const sunset: string = getSunTime(info.sunset)
  console.log(sunset, sunrise)
  return (
    <>
      <SunriseSunset />
      <div className="flex flex-row gap-5 items-center justify-center w-full bg-purple-300 opacity-80 rounded-md">
        <InfoToday forecastToday={forecastToday} />
      </div>
      <NextHours forecastToday={forecastToday} />
    </>
  )
}
export default TodayAndMore
