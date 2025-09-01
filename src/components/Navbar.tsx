import { Link } from 'react-router-dom'

import Hamburger from '../assets/hamburger.svg?react'

interface NavbarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {

  return (
    <nav className="w-screen sticky top-0 left-0 z-50 md:h-32 px-4 md:px-16 lg:px-20 2xl:px-80 pt-8 pb-4 flex items-center justify-between font-serif">
      <h1 className="text-4xl"><Link to="/" aria-label='Go to home page'>Milena</Link></h1>
      <ul className='hidden md:flex gap-8 text-base uppercase'>
        <li><Link to="/work">work</Link></li>
        <li><Link to="/blog">blog</Link></li>
        <li><Link to="/contacts">contacts</Link></li>
      </ul>

      <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden trasp"
          aria-label="Toggle menu"
        ><Hamburger className="size-9 text-black dark:text-white"/></button>
    </nav>

  );
}