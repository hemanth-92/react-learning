import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme.js'
import ThemeButton from './components/ThemeButton.jsx'
import Card from './components/Card.jsx'


function App() {

  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.remove(themeMode)
  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }} >

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
