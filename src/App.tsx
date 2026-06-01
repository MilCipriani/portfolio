import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme.tsx'
import Navbar from './components/Navbar.tsx'
import Home from './pages/Home.tsx'
import Work from './pages/Work.tsx'
import Blog from './pages/Blog.tsx'
import Contacts from './pages/Contacts.tsx'

function AppContent() {
  const location = useLocation()
  
  const isHomePage = location.pathname === '/'


  useEffect(() => {
    const canonical = `https://milena.work${location.pathname}`
    
    let link = document.querySelector("link[rel='canonical']")
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonical)
  }, [location.pathname])
  
  return (
    <div className={`relative h-full w-full flex flex-col items-center justify-center pt-12 pb-6 ${
      isHomePage ? 'overflow-hidden bg-linear-175 from-[#FFD6E8] to-[#FFA879] dark:from-[#786889] dark:to-[#161A28]' 
                : 'bg-linear-180 from-45% from-white to-[#FFF1E9] dark:from-[#403B49] dark:to-[#393147]'}`
    }>
      {!isHomePage && (<div className='absolute top-0 left-0 w-full bg-main-accent dark:bg-main-accent-dark h-1.5'></div>)}
      
      <Navbar />
      <div key={location.pathname} className="w-full animate-fade-in flex-1 overflow-auto hide-scrollbar px-4 sm:px-8 md:px-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
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