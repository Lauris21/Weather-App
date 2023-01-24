import { DateToday } from '../types'

const Date = (dt: number): JSX.Element => {
  const date = dt
  const getDate = (date: number) => {
    const myDate = new Date(date * 1000)
    const array = myDate.toString().split(' ')
    return {
      weekDay: array[0],
      day: array[2],
      month: array[1],
      year: array[3],
    }
  }
  const dateToday: DateToday = getDate(date)
  console.log(dateToday)
  return <div></div>
}

export default Date
