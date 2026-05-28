import { useState, useEffect } from 'react'
import { useLanguage } from '../translation/index'

import GPS from '../assets/Contacts/GPS.svg?react'
import Whatsapp from '../assets/Contacts/Whatsapp.svg?react'
import Linkedin from '../assets/Contacts/Linkedin.svg?react'
import Github from '../assets/Contacts/Github.svg?react'

import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

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
    <main className='h-full flex flex-col items-center gap-32 max-w-[1000px] mx-auto'>
      <section className='w-full flex flex-col items-center gap-20'>
        <div className='w-full flex flex-col items-start gap-1'>
          <h1 id="title" className="font-serif uppercase text-center text-3xl xxs:text-4xl md:text-6xl lg:text-7xl">{t('routes.contacts.section1.h1')}</h1>
          <span className='flex items-center justify-start text-text-gps-input dark:text-text-gps-input-dark'><GPS aria-hidden="true" className='w-4 h-auto'/><p className='text-[14px]'>{t('routes.contacts.section1.gps')}</p></span>
        </div>
        <ContactForm/>
      </section>

      
       
      
      <section className='w-full flex flex-col gap-20 mb-auto'>
        <h1 id="title" className="w-full text-start font-serif uppercase text-3xl xxs:text-4xl md:text-6xl lg:text-7xl">{t('routes.contacts.section2.h1')}</h1>
        <div className='w-full flex items-center justify-center gap-6'>
          <a href={whatsappLink} aria-label={t('routes.contacts.aria.whatsapp')} target="_blank" rel="noopener noreferrer">
            <Whatsapp aria-hidden="true" className='md:w-14 md:h-14 xxs:w-12 xxs:h-12 hover:text-accent-light dark:hover:text-accent-dark active:text-secondary-light'/>
          </a>
          <a href='https://www.linkedin.com/in/milena-cipriani' aria-label={t('routes.contacts.aria.linkedin')} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" className='w-14 h-14 xxs:w-12 xxs:h-12 hover:text-accent-light dark:hover:text-accent-dark active:text-secondary-light'/></a>
          <a href='https://github.com/MilCipriani' aria-label={t('routes.contacts.aria.github')} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" className='w-14 h-14 xxs:w-12 xxs:h-12 hover:text-accent-light dark:hover:text-accent-dark active:text-secondary-light'/></a>
        </div>
      </section> 
     
      
              
      <Footer />
    </main>
    
  );
}