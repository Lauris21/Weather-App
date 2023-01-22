export const getData: (locat: string) => Promise<any> = async (
  locat: string
) => {
  const data = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${locat}&limit=5&lang=en&appid=${process.env.REACT_APP_API_KEY}`
  )
  const dataToJson = await data.json()
  return dataToJson
}
