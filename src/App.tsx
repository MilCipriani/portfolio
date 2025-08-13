import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme.tsx'
import LoadingScreen from './pages/LoadingScreen.tsx'
import Navbar from './components/Navbar.tsx'
import Menu from './components/Menu.tsx'
import Home from './pages/Home.tsx'
import Work from './pages/Work.tsx'

import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    //Show loading screen for 3 seconds at every refresh
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  //Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    //Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="h-screen w-screen flex flex-col bg-white dark:bg-blue">
          <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <div className="flex-1 overflow-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
            </Routes>
          </div>
          <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
