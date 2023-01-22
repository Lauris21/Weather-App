const [locat, setLocat] = useState<string>('')
const [options, setOptions] = useState([])
const [city, setCity] = useState<OptionType | null>(null)

const getOptions = (value: string) => {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
      import.meta.env.VITE_APP_API_KEY
    }`
  )
    .then((res) => res.json())
    .then((data) => setOptions(data))
}
const handleInput = (
  e: ChangeEvent<HTMLInputElement>
): OptionType[] | undefined => {
  const value = e.target.value.trim()
  setLocat(value)
  if (value === '') return
  getOptions(value)
}

const getWeather = (city: OptionType) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${
      city.lon
    }&units=metric&appid=${import.meta.env.VITE_APP_API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data.name))
}

const handleClickSearch = () => {
  if (!city) return
  getWeather(city)
}
const handleClickOption = (option: OptionType) => {
  setCity(option)
}
useEffect(() => {
  if (city) {
    setLocat(city.name)
    setOptions([])
  }
}, [city])
