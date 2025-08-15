import ThemeToggle from '../components/ThemeToggle';

import Logo from '../assets/Logo.svg?react'
import flowerImage from '../assets/vintage-flowers-circle.png';
import flowerImageSquared from '../assets/vintage-flowers-squared.jpg';
import flowerImageRectangle from '../assets/vintage-flowers.jpg';

const INTRO_TEXT = "I'm a software developer who enjoys creating websites that combine clean design with robust functionality.\n\nI believe the best solutions are the ones that feel effortless to use — both for you and your audience.\n\nMy goal is to build something that truly reflects your brand identity and grows alongside your business.";

export default function Home() {

  return (
    <div className='bg-white dark:bg-blue h-full flex flex-col justify-between px-4 py-8 xxs:justify-start xxs:pt-16 xxs:gap-16 md:px-16'>

      {/*Layout for small and medium screens*/}
      <div className="flex justify-around gap-4 lg:hidden">
        <h1 className="self-center font-serif text-4xl md:text-5xl uppercase">Hello,<br /> I'm Milena</h1>
        <div className="relative inline-block md:w-1/2">
          <img src={flowerImage}
              alt="Flowers with a vintage effect"
              className='w-36 aspect-square md:hidden'></img>
          <img src={flowerImageSquared}
              alt="Flowers with a vintage effect"
              className='hidden md:inline lg:hidden rounded-lg w-full aspect-square'></img>
          <Logo className='w-20 h-20 md:w-28 md:h-28  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'/>
        </div>
      </div>

      <p className='text-center lg:hidden'>{INTRO_TEXT}</p>

      <button className='flex items-center button-primary-layout w-48 justify-center self-center lg:hidden'>Check my works</button>
      {/*------------------------*/}


      {/*Layout for large screens*/}
      <div className='hidden lg:flex justify-around gap-8 items-center'>

        <div className='flex flex-col gap-24'>
          <h1 className="self-center font-serif text-7xl uppercase">Hello,<br /> I'm Milena</h1>
          <p className='text-center'>{INTRO_TEXT}</p>
          <button className='button-primary-layout hidden lg:flex justify-center self-center items-center w-48'>Check my works</button>

        </div>

        {/*Image + Logo on lg and 2xl*/}
        <div className='relative inline-block w-1/2'>
          <img src={flowerImageRectangle}
              alt="Flowers with a vintage effect"
              className='rounded-lg 2xl:hidden object-contain mx-auto'></img>
          <img src={flowerImageSquared}
              alt="Flowers with a vintage effect"
              className='hidden 2xl:block rounded-lg max-h-[70vh] aspect-square object-contain mx-auto'></img>
          <Logo className='w-36 h-36 xl:w-42 xl:h-42  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'/>
        </div>
        
      </div>

      {/*Lang and theme on medium screens*/}
      <div className='hidden py-8 md:flex justify-end items-center gap-4 mt-auto'>
        <a href="">EN</a>
        <ThemeToggle />
      </div>
        
    </div>
  );
}