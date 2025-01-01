import { useEffect, useState } from 'react'
import {Card,ThemeBtn} from './components/index'
import { ThemeProvider } from './contexts/theme'
function App() {
  const [themeMode,setThemeMode] =useState('light')
  const darkTheme = ()=>{
      setThemeMode('dark')
  }

  const lightTheme=()=>{
    setThemeMode('light')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <ThemeBtn/>
      <Card/>
    </ThemeProvider>
  )
}

export default App