import MainMenu from './components/MainMenu/MainMenu'

function App() {
  const handleSelect = (section: string) => {
    console.log('Selected section:', section)
  }

  return <MainMenu onSelect={handleSelect} />
}

export default App
