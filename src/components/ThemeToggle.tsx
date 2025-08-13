import { useTheme } from '../hooks/useTheme'
import SunIcon from '../assets/sunIcon.svg?react'
import MoonIcon from '../assets/moonIcon.svg?react'


export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      onClick={handleToggle}
      className="themeButton transition-colors"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <span className="">
        {theme === 'light' ? (<MoonIcon className="w-4 h-4" />) : (<SunIcon className="w-4 h-4" />
      )}
      </span>
      
    </button>
  )
}