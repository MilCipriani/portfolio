import ThemeToggle from '../components/ThemeToggle';
import { Link } from 'react-router-dom'

const INTRO_TEXT = "Through client work and startup collaborations, I've learned that effective software extends beyond writing good code — it's about building systems that are reliable, perform well, and genuinely make life easier for both users and developers. I find myself drawn to understanding the full picture, from user interface to infrastructure.";

export default function Home() {

  return (
    <main className='h-full flex flex-col justify-between py-8 xs:py-18'>
      <section className='flex flex-col items-center justify-between h-full max-h-160 lg:w-1/2'>
        <h1 className="font-serif uppercase text-center text-3xl xxs:text-4xl md:text-6xl lg:text-7xl">Hello,<br className='md:hidden'/> I'm Milena</h1>
        <h2 className='text-center text-xl md:text-2xl lg:text-4xl'>I'm a software developer who enjoys creating applications that combine clean design with robust functionality.</h2>
        <p className='text-center whitespace-pre-line xxs:text-base'>{INTRO_TEXT}</p>

        <Link to="/work" className="button-primary uppercase" role='button'>Check my works</Link>
      </section> 
      <footer className='hidden md:flex justify-end items-center gap-4'>
        <button disabled  type="button" aria-disabled="true" aria-label='Change language - in development' className='bg-transparent uppercase'>EN</button>
        <ThemeToggle /> 
      </footer> 
    </main>
    
  );
}