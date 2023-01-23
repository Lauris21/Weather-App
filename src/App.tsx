import Header from './components/Header'
import Main from './components/Main'
import useWeather from './hooks/useWeather'

const App = (): JSX.Element => {
  const {
    locat,
    options,
    weather,
    setWeather,
    handleInput,
    handleClickSearch,
    handleClickOption,
  } = useWeather()

  return (
    <div className="App">
      <Header />
      <Main
        locat={locat}
        weather={weather}
        setWeather={setWeather}
        options={options}
        handleInput={handleInput}
        handleClickSearch={handleClickSearch}
        handleClickOption={handleClickOption}
      />
    </div>
  )
}

export default App
