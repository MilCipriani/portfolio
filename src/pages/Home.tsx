import { useLanguage } from '../translation/index'

import { Link } from 'react-router-dom'

import ThemeToggle from '../components/ThemeToggle'
import LanguageToggle from '../components/LanguageToggle'

export default function Home() {

const { t } = useLanguage()

  return (
    <main className='h-full flex flex-col justify-center items-center sm:gap-18 py-8 xs:py-18'>
      <section className='flex flex-col items-center justify-between h-full max-h-124 sm:max-h-160 lg:max-w-2/3 md:mt-auto'>
        <div className='flex flex-col justify-center items-center gap-3 sm:gap-8'>
          <h1 className="font-serif uppercase text-center text-3xl xxs:text-4xl md:text-6xl lg:text-7xl">{t('routes.home.h1')}</h1>
          <h2 className='text-center text-2xl lg:text-4xl font-medium'>{t('routes.home.h2')}</h2>
        </div>
        
        <h3 className='text-center text-lg md:text-xl lg:text-2xl'>{t('routes.home.h3')}</h3>
        <div className='flex flex-col items-center justify-center gap-10'>
          <div className='flex flex-col items-center justify-center gap-2 sm:gap-4'>
            <p className='text-center whitespace-pre-line sm:text-base'>{t('routes.home.p1')}</p>
            <p className='text-center sm:text-base font-semibold'>{t('routes.home.p2')}</p>
          </div>
          <Link to="/work" className="button-primary bg-black dark:bg-background-dark text-accent-light dark:text-primary-light uppercase" role='button'>{t('routes.home.button')}</Link>
        </div>
      </section>

      <footer className='hidden md:flex justify-end items-center gap-4 ml-auto mt-auto'>
        <LanguageToggle />
        <ThemeToggle /> 
      </footer> 
    </main>
    
  )
}