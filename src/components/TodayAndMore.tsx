import { InfoProps } from '../types'
import InfoToday from './InfoToday'
import NextHours from './NextHours'

const TodayAndMore = ({ info }: InfoProps): JSX.Element => {
  const forecastToday = info.list
  return (
    <>
      <div className="flex flex-row gap-5 items-center justify-center w-full bg-purple-300 opacity-80 rounded-md">
        <InfoToday forecastToday={forecastToday} />
      </div>
      <NextHours forecastToday={forecastToday} />
    </>
  )
}
export default TodayAndMore
