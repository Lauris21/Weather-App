import { Info, TempDay } from '../types/index'
import { formatDate, average, getIcon } from '../utils/getDate'

const NextDays = ({ forecastToday }: Info): JSX.Element => {
  const days = forecastToday

  const avgMax: TempDay = {}
  const avgMin: TempDay = {}
  const dailyIcon: TempDay = {}
  const dailyweather: TempDay = {}

  days.map((item) => {
    const date = new Date(item.dt_txt)
    const day = date.toISOString().slice(0, 10)
    if (!avgMax[day]) {
      avgMax[day] = item.main.temp_max
      avgMin[day] = item.main.temp_min
    } else {
      if (item.main.temp_max > avgMax[day]) {
        avgMax[day] = item.main.temp_max
      }
      if (item.main.temp_min < avgMin[day]) {
        avgMin[day] = item.main.temp_min
      }
    }
  })

  days.map((item) => {
    const date = new Date(item.dt_txt)
    const day = date.toISOString().slice(0, 10)
    const iconAndWeather = item.weather[0]
    if (!dailyIcon[day]) {
      dailyIcon[day] = []
    }
    dailyIcon[day].push(iconAndWeather.icon)
    if (!dailyweather[day]) {
      dailyweather[day] = []
    }
    dailyweather[day].push(iconAndWeather.description)
  })
  const mayIcon: TempDay = average(dailyIcon)
  const mayDescription: TempDay = average(dailyweather)

  const nextForecast: TempDay = {}
  for (const key of Object.keys(avgMax)) {
    nextForecast[key] = {
      max: avgMax[key],
      min: avgMin[key],
      icon: mayIcon[key],
      weather: mayDescription[key],
    }
  }

  const arraNextForecast = []
  for (const day in nextForecast) {
    if (nextForecast.hasOwnProperty(day)) {
      arraNextForecast.push({
        day,
        value: nextForecast[day],
      })
    }
  }

  const week: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="flex flex-col w-full bg-white/10 opacity-85 p-4 gap-4 rounded-md max-w-screen-2xl">
      {arraNextForecast.map((item, i) => (
        <div
          key={i}
          className="flex flex-row justify-between items-center rounded-md bg-violet-300 px-3 py-2 shadow-[0_50px_25px_-24px_rgb(0,0,50,0.3)] md:justify-around dark:opacity-70"
        >
          <div className="flex flex-col gap-4 md:flex-row">
            <p className="text-center ">
              {i === 0 ? 'Today' : week[new Date(item.day).getDay()]}
            </p>
            <p className="text-center ">{formatDate(item.day)}</p>
          </div>
          <div className="flex flex-col items-center md:flex-row md:w-[19rem] ">
            <img
              className="max-w-[7rem]"
              src={
                item.value.weather == 'clear sky'
                  ? getIcon('01d')
                  : getIcon(item.value.icon)
              }
              alt={`weather-icon-${item.value.weather}`}
            />
            <p className="text-center text-sm place-self-center w-full">
              {item.value.weather.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-center ">
              Max: <span>{item.value.max}º</span>
            </p>
            <p className="text-center ">
              Min: <span>{item.value.min}º</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NextDays