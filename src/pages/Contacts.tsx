import ThemeToggle from '../components/ThemeToggle';

import LogoBGL from '../assets/LogoBGL.svg';
import LogoBGD from '../assets/LogoBGD.svg';
import GPS from '../assets/Contacts/GPS.svg?react'
import Whatsapp from '../assets/Contacts/Whatsapp.svg?react'
import Mail from '../assets/Contacts/Mail.svg?react'
import Linkedin from '../assets/Contacts/Linkedin.svg?react'
import Github from '../assets/Contacts/Github.svg?react'

export default function Contacts() {

  return (
    <main className='h-full flex flex-col justify-between pt-8 pb-16 xxs:py-16 relative'>
      <section className='flex flex-col items-start z-10'>
        <h1 className="font-serif uppercase text-center text-3xl xxs:text-4xl md:text-6xl lg:text-7xl">Let's chat!</h1>
        <span className='flex items-center justify-start'><GPS className='w-4 h-auto'/><p>Time Zone CEST (UTC+2)</p></span>
      </section>
      
      <img src={LogoBGL} className='dark:hidden absolute left-0 top-1/2 -translate-y-1/2 aspect-ratio h-[72vh] z-0'></img>
      <img src={LogoBGD} className='hidden dark:block absolute left-0 top-1/2 -translate-y-1/2 aspect-ratio h-[72vh] z-0'></img>
      
      <div className='flex flex-col gap-4 items-end pr-8 md:pr-0 absolute top-1/2 -translate-y-1/2 right-0 xs:right-[5vw] md:right-[10vw] xl:right-0 z-10'>
        <Whatsapp className='w-14 h-14 xxs:w-16 xxs:h-16'/>
        <Mail className='w-14 h-14 xxs:w-16 xxs:h-16'/>
        <Linkedin className='w-14 h-14 xxs:w-16 xxs:h-16'/>
        <Github className='w-14 h-14 xxs:w-16 xxs:h-16'/>
      </div>
      
      <footer className='hidden md:flex justify-end items-center gap-4 z-10'>
        <a href='' role='button'>EN</a>
        <ThemeToggle /> 
      </footer> 
    </main>
    
  );
}