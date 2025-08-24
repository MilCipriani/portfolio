import ThemeToggle from '../components/ThemeToggle';
import { Link } from 'react-router-dom'

const INTRO_TEXT = "I believe the best solutions are the ones that feel effortless to use — both for you and your audience.\n\nMy goal is to build something that truly reflects your brand identity and grows alongside your business.";

export default function Home() {

  return (
    <main className='h-full flex flex-col justify-between py-8 xs:py-18'>
      <section className='flex flex-col items-center justify-between h-full max-h-160 lg:w-1/2'>
        <h1 className="font-serif uppercase text-center text-3xl xxs:text-4xl md:text-6xl lg:text-7xl">Hello,<br className='md:hidden'/> I'm Milena</h1>
        <h2 className='text-center text-lg md:text-2xl lg:text-4xl'>I'm a software developer who enjoys creating websites that combine clean design with robust functionality.</h2>
        <p className='text-center whitespace-pre-line xxs:text-base'>{INTRO_TEXT}</p>

        <Link to="/work" className="button-primary uppercase">Check my works</Link>
      </section> 
      <footer className='hidden md:flex justify-end items-center gap-4'>
        <a href='' role='button'>EN</a>
        <ThemeToggle /> 
      </footer> 
    </main>
    
  );
}