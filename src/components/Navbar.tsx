import ThemeToggle from './ThemeToggle'
import { Link } from 'react-router-dom'


export default function Navbar() {

  return (
    <div className="px-16 py-8 flex items-center justify-around w-screen bg-white dark:bg-blue navbar-shadow sticky top-0 left-0 z-50 h-32 font-serif">
      <h1 className="text-5xl"><Link to="/">Milena</Link></h1>
      <ul className='flex gap-8 text-3xl uppercase'>
        <li><Link to="/work">work</Link></li>
        <li><Link to="/blog">blog</Link></li>
        <li><Link to="/contacts">contacts</Link></li>
      </ul>
      <ThemeToggle/>
    </div>
  );
}