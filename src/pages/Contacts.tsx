import { useState, useEffect } from 'react'
import ThemeToggle from '../components/ThemeToggle'

import LogoBGL from '../assets/LogoBGL.svg'
import LogoBGD from '../assets/LogoBGD.svg'
import GPS from '../assets/Contacts/GPS.svg?react'
import Whatsapp from '../assets/Contacts/Whatsapp.svg?react'
import Mail from '../assets/Contacts/Mail.svg?react'
import Linkedin from '../assets/Contacts/Linkedin.svg?react'
import Github from '../assets/Contacts/Github.svg?react'

import SettingsL from '../assets/settingL.svg?react'
import SettingsD from '../assets/settingD.svg?react'
import X from '../assets/X.svg?react'

export default function Contacts() {
const [whatsappLink, setWhatsappLink] = useState('')
const [toastVisibility, setToastVisible] = useState(false)

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
    <main className='h-full flex flex-col justify-between pt-8 pb-16 xxs:py-16 relative'>
      <section aria-labelledby='title' className='flex flex-col items-start z-10'>
        <h1 id="title" className="font-serif uppercase text-center text-3xl xxs:text-4xl md:text-6xl lg:text-7xl">Let's chat!</h1>
        <span className='flex items-center justify-start'><GPS aria-hidden="true" className='w-4 h-auto'/><p>Time Zone CEST (UTC+2)</p></span>
      </section>
       
      <img src={LogoBGL} aria-hidden className='dark:hidden absolute left-0 top-1/2 -translate-y-1/2 aspect-ratio h-[70vh] z-0'></img>
      <img src={LogoBGD} aria-hidden className='hidden dark:block absolute left-0 top-1/2 -translate-y-1/2 aspect-ratio h-[70vh] z-0'></img>
      
      <div className='flex flex-col gap-4 items-end pr-8 md:pr-0 absolute top-1/2 -translate-y-1/2 right-0 xs:right-[5vw] md:right-[10vw] xl:right-0 z-10'>
        <a href={whatsappLink} aria-label="Contact me on Whatsapp" target="_blank" rel="noopener noreferrer">
          <Whatsapp aria-hidden="true" className='w-14 h-14 xxs:w-16 xxs:h-16 hover:text-accent-light dark:hover:text-accent-dark active:text-secondary-light'/>
        </a>

        <button onClick={() => setToastVisible(true)} aria-label="Mail form in development - open notification">
          <Mail aria-hidden="true" className='cursor-pointer w-14 h-14 xxs:w-16 xxs:h-16 hover:text-accent-light dark:hover:text-accent-dark active:text-secondary-light'/>
        </button>
        <a href='https://www.linkedin.com/in/milena-cipriani-256812354/' aria-label="Visit my Linkedin profile" target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" className='w-14 h-14 xxs:w-16 xxs:h-16 hover:text-accent-light dark:hover:text-accent-dark active:text-secondary-light'/></a>
        <a href='https://github.com/MilCipriani' aria-label="Visit my Github profile" target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" className='w-14 h-14 xxs:w-16 xxs:h-16 hover:text-accent-light dark:hover:text-accent-dark active:text-secondary-light'/></a>
      </div>

      {/*I don't conditionally render the toast -> avoid DOM clutter, layout recalculation and I allow smooth fade-in/out animations*/}
      <div className={` transition-opacity duration-500 ease-in-out shadow-lg absolute flex flex-col items-start justify-center bottom-[20%] left-[50%] -translate-x-1/2 max-w-[90vw] px-8 pt-4 pb-12 bg-accent-light dark:bg-accent-dark rounded-2xl z-100
        ${toastVisibility ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <button aria-label="Close notification" onClick={() => setToastVisible(false)} className='ml-auto py-4 pl-8 pr-0 hover:text-transparent-black dark:hover:text-transparent-white'><X /></button>
          
          <div className='flex flex-col items-center gap-4'>
            <SettingsL aria-hidden className='dark:hidden animate-slow-spin w-16 h-16 flex-shrink-0'/>
            <SettingsD aria-hidden className='hidden dark:block animate-slow-spin w-16 h-16 flex-shrink-0'/>

            <div className='flex flex-col  gap-4'>
              <h2 className='text-3xl font-serif'>Whoops!</h2>
              <div>
                <p className='text-lg'>This website is still in development.</p>
                <p className='font-extralight text-base'>I will add a contact form soon, but until then here's my mail!</p>
              </div>
              
              <p className='text-lg font-medium'>milenacipriani.mail@gmail.com</p>
            </div>
          </div>
        </div>
               
      <footer className='hidden md:flex justify-end items-center gap-4 z-10'>
        <span className='hidden sm:block mr-auto pl-4'>© Milena Cipriani</span>
        <button disabled type="button" aria-disabled="true" aria-label='Change language - in development' className='bg-transparent uppercase'>EN</button>
        <ThemeToggle /> 
      </footer> 
    </main>
    
  );
}

//TODO: add contacts form and get rid of the toaster