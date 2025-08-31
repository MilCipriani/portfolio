import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  //Get initial theme: from localStorage OR system preference (from the html script before react renders) if first visit
  const [theme, setThemeState] = useState<Theme>(() => {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  })

  //Update theme
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    //Save manual choices to localStorage
    localStorage.setItem('theme', newTheme)
  }

  //Apply theme changes to the document
  useEffect(() => {
    //Apply or remove the 'dark' class to the document element (<html>)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

//Custom hook to use theme
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}