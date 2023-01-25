import { Info, TempDay } from '../types/index'
import { formatDate, average } from '../utils/getDate'

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
  for (let day in nextForecast) {
    if (nextForecast.hasOwnProperty(day)) {
      arraNextForecast.push({
        day,
        value: nextForecast[day],
      })
    }
  }
  console.log(arraNextForecast)

  const week: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div>
      <section>
        {arraNextForecast.map((item, i) => (
          <div key={i}>
            <div>
              <p>{i === 0 ? 'Today' : week[new Date(item.day).getDay()]}</p>
              <p>{formatDate(item.day)}</p>
            </div>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${item.value.icon}@2x.png`}
                alt={`weather-icon-${item.value.weather}`}
              />
              <p>{item.value.weather.toUpperCase()}</p>
            </div>
            <div>
              <p>
                Max: <span>{item.value.max}º</span>
              </p>
              <p>
                Min: <span>{item.value.min}º</span>
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default NextDays
