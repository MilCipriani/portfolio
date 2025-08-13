import { Link } from 'react-router-dom'

import Hamburger from '../assets/hamburger.svg?react'

interface NavbarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {

  return (
    <div className="px-4 md:px-8 flex items-center justify-between w-screen bg-white dark:bg-blue navbar-shadow sticky top-0 left-0 z-50 h-24 md:h-32 font-serif">
      <h1 className="text-4xl md:text-5xl"><Link to="/">Milena</Link></h1>
      <ul className='hidden md:flex gap-8 text-2xl sm:text-3xl uppercase'>
        <li><Link to="/work">work</Link></li>
        <li><Link to="/blog">blog</Link></li>
        <li><Link to="/contacts">contacts</Link></li>
      </ul>

      <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden trasp"
          aria-label="Toggle menu"
        ><Hamburger className="size-9 text-black dark:text-white"/></button>
    </div>

  );
}