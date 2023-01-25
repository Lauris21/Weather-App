import { count } from 'console'
import { DateToday, TempDay } from '../types'

export const getDate = (date: number): DateToday => {
  const myDate: Date = new Date(date * 1000)
  const array: string[] = myDate.toString().split(' ')
  return {
    weekDay: array[0],
    day: array[2],
    month: array[1],
    year: array[3],
  }
}

export const formatDate = (date: string): string => {
  const dateArray = date.split('-')
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]
  return `${dateArray[2]} ${months[dateArray[1] - 1]}`
}

export const average = (list: TempDay) => {
  const averageTotal: Record<string, string> = {}
  for (const key in list) {
    const counts = list[key].reduce((counts, string) => {
      counts[string] = (counts[string] || 0) + 1
      return counts
    }, {})
    averageTotal[key] = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    )
  }
  return averageTotal
}
