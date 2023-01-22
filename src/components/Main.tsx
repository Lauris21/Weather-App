import { Props } from "../types"

const Main = ({locat, options, handleInput, handleClickSearch, handleClickOption}): JSX.Element => {

  return (
    <main className="flex flex-col justify-around items-center min-h-[92vh] bg-violet-400 dark:bg-violet-900">
      <div className="w-full flex flex-col justify-around  sm:flex-row gap-10">
        <section className="relative flex flex-col gap-5 items-center justify-center">
          <div className="relative flex">
            <input
              className="rounded-md w-40 sm:w-56 placeholder:text-violet-600 placeholder:p-2.5 placeholder:bg-violet-200 h-8"
              placeholder="City"
              onChange={handleInput}
            />
            <button
              className="flex justify-center rounded-md border-2 h-8 w-10"
              onClick={handleClickSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 m-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <ul className="absolute top-8 bg-blue-500 rounded-md sm:top-20">
            {options.map((option: { name: string }, index: number) => (
              <li key={index}>
                <button
                  className="text-sm w-full hover:bg-violet-500 hover:text-violet-200 px-2 py-1 cursor-pointer"
                  onClick={() => handleClickOption(option)}
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
