import { useState, useEffect } from 'react'
import { useLanguage } from '../translation/index'

import LanguageToggle from '../components/LanguageToggle';
import ThemeToggle from '../components/ThemeToggle'

import GPS from '../assets/Contacts/GPS.svg?react'
import Whatsapp from '../assets/Contacts/Whatsapp.svg?react'
import Linkedin from '../assets/Contacts/Linkedin.svg?react'
import Github from '../assets/Contacts/Github.svg?react'

import ContactForm from '../components/ContactForm';

export default function Contacts() {
  const [whatsappLink, setWhatsappLink] = useState('')
  const { t } = useLanguage()


  //This picks how to open whatsapp depending on the device
  useEffect(() => {
    const isMobile = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      setWhatsappLink("whatsapp://send?phone=393492996483");//Mobile app
    } else {
      setWhatsappLink("https://web.whatsapp.com/send?phone=393492996483");//WhatsappWeb
    }
  }, []);//Runs once at mount


  return (
    <main className='h-full flex flex-col gap-8 justify-between pt-8 pb-16 xxs:py-16 relative'>
      <section aria-labelledby='title' className='flex flex-col items-start z-10'>
        <h1 id="title" className="font-serif uppercase text-center text-3xl xxs:text-4xl md:text-6xl lg:text-7xl">{t('routes.contacts.h1')}</h1>
        <span className='flex items-center justify-start'><GPS aria-hidden="true" className='w-4 h-auto'/><p>{t('routes.contacts.p')}</p></span>
      </section>

      <div className='flex md:pt-0 md:flex-col gap-8 md:gap-4 md:items-end items-center justify-center md:absolute md:top-1/2 md:-translate-y-1/2 right-0 z-100'>
        <a href={whatsappLink} aria-label={t('routes.contacts.aria.whatsapp')} target="_blank" rel="noopener noreferrer">
          <Whatsapp aria-hidden="true" className='md:w-14 md:h-14 xxs:w-12 xxs:h-12 hover:text-accent-light dark:hover:text-accent-dark active:text-secondary-light'/>
        </a>
        <a href='https://www.linkedin.com/in/milena-cipriani-256812354/' aria-label={t('routes.contacts.aria.linkedin')} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" className='w-14 h-14 xxs:w-12 xxs:h-12 hover:text-accent-light dark:hover:text-accent-dark active:text-secondary-light'/></a>
        <a href='https://github.com/MilCipriani' aria-label={t('routes.contacts.aria.github')} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" className='w-14 h-14 xxs:w-12 xxs:h-12 hover:text-accent-light dark:hover:text-accent-dark active:text-secondary-light'/></a>
      </div>

      <ContactForm />
       
      

      
               
      <footer className='hidden md:flex justify-end items-center gap-4 z-10'>
        <span className='hidden sm:block mr-auto pl-4'>© Milena Cipriani</span>
        <LanguageToggle />
        <ThemeToggle /> 
      </footer> 
    </main>
    
  );
}

//TODO: add contacts form and get rid of the toaster