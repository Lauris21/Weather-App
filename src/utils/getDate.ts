import { DateToday } from '../types'

const getDate = (date: number): DateToday => {
  const myDate = new Date(date * 1000)
  const array = myDate.toString().split(' ')
  return {
    weekDay: array[0],
    day: array[2],
    month: array[1],
    year: array[3],
  }
}
export default getDate
