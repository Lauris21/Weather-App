import { Info, TempDay } from '../types/index'

const NextDays = ({ forecastToday }: Info): JSX.Element => {
  const days = forecastToday

  const avgMax: TempDay = {}
  const avgMin: TempDay = {}
  const dailyIcon: TempDay = {}
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
    const icon = item.weather[0].icon

    if (!dailyIcon[day]) {
      dailyIcon[day] = {}
    }
    if (!dailyIcon[day][icon]) {
      dailyIcon[day][icon] = 1
    } else {
      dailyIcon[day][icon]++
    }
  })

  const mayIcon: TempDay = {}

  Object.keys(dailyIcon).forEach((day) => {
    let maxIcon = ''
    let maxCount = 0
    Object.keys(dailyIcon[day]).forEach((icon) => {
      if (dailyIcon[day][icon] > maxCount) {
        maxIcon = icon
        maxCount = dailyIcon[day][icon]
      }
    })
    mayIcon[day] = maxIcon
  })

  const nextForecast: TempDay = {}
  for (const key of Object.keys(avgMax)) {
    nextForecast[key] = {
      max: avgMax[key],
      min: avgMin[key],
      icon: mayIcon[key],
    }
  }
  console.log(nextForecast)
  return (
    <div>
      <section></section>
    </div>
  )
}

export default NextDays
