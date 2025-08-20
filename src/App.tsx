import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme.tsx'
import Navbar from './components/Navbar.tsx'
import Menu from './components/Menu.tsx'
import Home from './pages/Home.tsx'
import Work from './pages/Work.tsx'

import './App.css'

function AppContent() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const isHomePage = location.pathname === '/'
  
  return (
    <div className={`h-screen w-screen flex flex-col relative ${
      isHomePage ? 'overflow-hidden' : ''
    } ${!isHomePage ? 'bg-white dark:bg-blue' : ''}`}>
      
      {/*Overscan background - only for HomePage */}
      {isHomePage && (
        <div className="absolute -top-[2%] -left-[2%] w-[110%] h-[110%] sm:-top-[1%] sm:-left-[1%] sm:w-[105%] sm:h-[105%] bg-home-image dark:bg-home-image-dark bg-cover bg-center bg-no-repeat -z-10"/>
      )}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="flex-1 overflow-auto hide-scrollbar px-4 md:px-16 lg:px-20 2xl:px-80">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

export default App