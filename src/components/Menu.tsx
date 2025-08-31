import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

import X from '../assets/X.svg?react'

interface FullScreenMenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function FullScreenMenu({ isMenuOpen, setIsMenuOpen }: FullScreenMenuProps) {
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div
        className={`fixed inset-0 bg-white dark:bg-blue z-[100] menu-transition transition-all duration-800 ease-in-out flex items-center justify-center ${
        isMenuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
    }`}>
      <div className='w-full flex flex-col items-center justify-center gap-12 text-4xl font-serif px-12'>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="trasp"
          aria-label="Close menu"
        >
          <X aria-hidden className="size-5 text-black dark:text-white"/>
        </button>

        <Link aria-label="Go to home page" to="/" onClick={handleLinkClick} >Milena</Link>

        <hr className="w-full my-4 border-t border-black dark:border-white" />

        <nav>
          <ul className="flex flex-col items-center gap-8 uppercase text-2xl">
            <li className="transform transition-transform duration-300 hover:scale-110">
              <Link 
                to="/work" 
                onClick={handleLinkClick}
                className="hover:opacity-70 transition-opacity"
              >
                Work
              </Link>
            </li>
            <li className="transform transition-transform duration-300 hover:scale-110">
              <Link 
                to="/blog" 
                onClick={handleLinkClick}
                className="hover:opacity-70 transition-opacity"
              >
                Blog
              </Link>
            </li>
            <li className="transform transition-transform duration-300 hover:scale-110">
              <Link 
                to="/contacts" 
                onClick={handleLinkClick}
                className="hover:opacity-70 transition-opacity"
              >
                Contacts
              </Link>
            </li>
            <button disabled type="button" aria-disabled="true" aria-label='Change language - in development' className='bg-transparent uppercase'>EN</button>
            <li className="transform transition-transform duration-300 hover:scale-110" onClick={handleLinkClick}><ThemeToggle /></li>

            <li className='mt-16 transform transition-transform duration-300 text-base text-transparent-black dark:text-transparent-white normal-case'>© Milena Cipriani</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}