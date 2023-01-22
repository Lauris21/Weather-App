import location from '../../public/location-svgrepo-com.svg'
import { ChangeEvent, useState } from 'react'
import { OptionType } from '../types'

const Main = (): JSX.Element => {
  const [locat, setLocat] = useState<string>('')
  const [options, setOptions] = useState([])

  const getOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data))
  }
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setLocat(value)
    if (value === '') return
    getOptions(value)
  }
  const handleClickOption = ( option : OptionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${option.lat}&lon=${
        option.lon
      }&units=metric&appid=${import.meta.env.VITE_APP_API_KEY}`
    )
    .then((res) => res.json())
    .then((data) => console.log(data))
  }

  const now = new Date()
  console.log(now)
  return (
    <main className="flex flex-col justify-around items-center min-h-[92vh] bg-violet-400 dark:bg-violet-900">
      <div className="w-full flex flex-col justify-around  sm:flex-row gap-10">
        <section className="relative flex flex-col gap-5 items-center justify-center">
          <input
            className="rounded-md w-40 sm:w-56 placeholder:text-violet-600 placeholder:p-2.5 placeholder:bg-violet-200 h-8"
            placeholder="Search city"
            onChange={handleInput}
          />
          <ul className="absolute top-8 bg-blue-500 rounded-md sm:top-20">
            {options.map((option: { name: string }, index: number) => (
              <li key={index}>
                <button
                  className="text-sm w-full hover:bg-violet-500 hover:text-violet-200 px-2 py-1 cursor-pointer"
                  onClick={() => handleClickOption (option)}
                >
                  {option.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-row gap-2">
            <img className="w-5" src={location} alt="location icon" />
            <h1>Location</h1>
          </div>
          <p>{}</p>
        </section>
        <section className="flex flex-col gap-5 items-center">
          <img className="w-36" src={location} alt="location icon" />
          <h2 className="w-full text-center">Grados º</h2>
        </section>
      </div>
    </main>
  )
}
export default Main
