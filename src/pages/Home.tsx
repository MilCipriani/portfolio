import { useLanguage } from '../translation/index'

import { Link } from 'react-router-dom'

import Footer from '../components/Footer'

export default function Home() {

const { t } = useLanguage()

  return (
    <main className='h-full flex flex-col justify-between items-center max-w-[1000px] mx-auto'>

      <section className='h-full max-h-[800px] flex flex-col justify-around items-center my-auto'>
        <div className='flex flex-col justify-center items-center gap-3 sm:gap-8'>
          <h1 className="font-serif uppercase text-center text-3xl xxs:text-4xl md:text-6xl lg:text-7xl">{t('routes.home.h1')}</h1>
          <h2 className='text-center text-xl'>{t('routes.home.h2')}</h2>
        </div>
        
        <p className='text-center text-sm text-home-text dark:text-home-text-dark'>{t('routes.home.p')}</p>

        <div className='flex flex-col items-center justify-center gap-14 max-w-[800px]'>
          <p className='text-justify hyphens-auto whitespace-pre-line sm:text-base'>{t('routes.home.p1')}</p>
          <p className='text-center sm:text-base font-semibold'>{t('routes.home.p2')}</p>
        </div>

        <div className='flex flex-col items-center justify-center gap-6'>
          <Link to="/work/" className="button-primary shadow-home-button-light dark:shadow-primary-button-dark" role='button'>{t('routes.home.button')}</Link>
          <Link to="/contacts/" className="text-sm text-home-text dark:text-home-text-dark" role='button'>{t('routes.home.contactMe')}</Link>
        </div>
      </section>
      
      

      <Footer />
    </main>
    
  )
}