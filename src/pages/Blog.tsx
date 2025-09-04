import { useLanguage } from '../translation/index'

import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle from '../components/LanguageToggle';

export default function Contacts() {
  const { t } = useLanguage()

  return (
    <main className='h-full flex flex-col justify-between pt-8 pb-16 xxs:py-16 relative'>
			<h1 className="font-serif uppercase text-3xl xxs:text-4xl md:text-6xl lg:text-7xl">{t('routes.blog.h1')}</h1>
      
      <footer className='hidden md:flex justify-end items-center gap-4'>
        <LanguageToggle />
        <ThemeToggle /> 
      </footer> 
    </main>
    
  );
}