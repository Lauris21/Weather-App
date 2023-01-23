import { Info } from '../types/index'

const NextHours = ({ forecastToday }: Info): JSX.Element => {
  const nextH = forecastToday
  return (
    <div className="flex overflow-x-scroll w-full  bg-violet-300 opacity-80 p-2 gap-1.5 rounded-md">
      {nextH.map((item, i) => (
        <div
          className="inline-block text-center w-[50px] flex-shrink-0 sm:w-[80px] bg-white/40 rounded-md"
          key={i}
        >
          <p>{i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}</p>
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
