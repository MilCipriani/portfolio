import { useLanguage } from '../translation/index'

import { Link } from 'react-router-dom'

import ThemeToggle from '../components/ThemeToggle'
import LanguageToggle from '../components/LanguageToggle'

export default function Home() {

const { t } = useLanguage()

  return (
    <main className='h-full flex flex-col gap-18 py-8 xs:py-18'>
      <section className='flex flex-col items-center justify-between h-full max-h-160 lg:w-1/2'>
        <h1 className="font-serif uppercase text-center text-3xl xxs:text-4xl md:text-6xl lg:text-7xl">{t('routes.home.hello')}<br className='md:hidden'/>{t('routes.home.IamMilena')}</h1>
        <h2 className='text-justify text-xl md:text-2xl lg:text-4xl'>{t('routes.home.h2')}</h2>
        <p className='text-justify whitespace-pre-line xxs:text-base'>{t('routes.home.p')}</p>

        <Link to="/work" className="button-primary uppercase" role='button'>{t('routes.home.button')}</Link>
      </section> 
      <footer className='hidden md:flex justify-end items-center gap-4'>
        <LanguageToggle />
        <ThemeToggle /> 
      </footer> 
    </main>
    
  )
}