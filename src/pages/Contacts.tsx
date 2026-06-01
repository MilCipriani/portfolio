import { useLanguage } from '../translation/index'

import GPS from '../assets/Contacts/GPS.svg?react'

import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Contacts() {
  const { t } = useLanguage()


  return (
    <main className='h-full flex flex-col items-center gap-32 max-w-[1000px] mx-auto'>
      <section className='w-full flex flex-col items-center gap-20 mb-auto'>
        <div className='w-full flex flex-col items-start gap-1'>
          <h1 id="title" className="font-serif uppercase text-center text-3xl xxs:text-4xl md:text-6xl lg:text-7xl">{t('routes.contacts.section1.h1')}</h1>
          <span className='flex items-center justify-start text-text-gps-input dark:text-text-gps-input-dark'><GPS aria-hidden="true" className='w-4 h-auto'/><p className='text-[14px]'>{t('routes.contacts.section1.gps')}</p></span>
        </div>
        <ContactForm/>
      </section>
     
      
              
      <Footer />
    </main>
    
  );
}