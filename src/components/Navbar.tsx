import { useLocation } from 'react-router-dom'
import { useLanguage } from '../translation/index'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const { t } = useLanguage()
  const location = useLocation()

  const isHomePage = location.pathname === '/'
  const isWorkPage = location.pathname === '/work'
  //const isBlogPage = location.pathname === '/blog'
  const isContactsPage = location.pathname === '/contacts'

  return (
    <nav className="w-full mb-12">
      <ul className='flex items-center justify-center gap-9 text-sm'>
        <li className={`h-8 ${isHomePage ? ' text-black dark:text-white border-b-4 border-main-accent dark:border-main-accent-dark' : 'text-secondary-text dark:text-secondary-text-dark'}`}><Link to="/">{t('nav.home')}</Link></li>
        <li className={`h-8 ${isWorkPage ? ' text-black dark:text-white border-b-4 border-main-accent dark:border-main-accent-dark' : 'text-secondary-text dark:text-secondary-text-dark'}`}><Link to='/work/'>{t('nav.work')}</Link></li>
        {/*<li className='h-8'><Link to="/blog">{t('nav.blog')}</Link></li>*/}
        <li className={`h-8 ${isContactsPage ? ' text-black dark:text-white border-b-4 border-main-accent dark:border-main-accent-dark' : 'text-secondary-text dark:text-secondary-text-dark'}`}><Link to="/contacts/">{t('nav.contacts')}</Link></li>
      </ul>

    </nav>

  );
}