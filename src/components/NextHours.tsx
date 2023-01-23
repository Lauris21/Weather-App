import { Info } from '../types/index'

const NextHours = ({ forecastToday }: Info): JSX.Element => {
  const nextH = forecastToday
  console.log(forecastToday)
  return (
    <div className="flex overflow-x-scroll w-full">
      {nextH.map((item, i) => (
        <div
          className="inline-block text-center w-[50px] flex-shrink-0 sm:w-[80px]"
          key={i}
        >
          <p>{item.dt}</p>
          <img
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt={`weather-icon-${item.weather[0].description}`}
          />
          <p>{Math.round(item.main.temp)}º</p>
        </div>
      ))}
    </div>
  )
}
export default NextHours
