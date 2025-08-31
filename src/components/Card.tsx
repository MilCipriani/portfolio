import { useEffect, useState } from 'react';
import type { CardData } from "../data/CardsData"

import CodeSVG from '../assets/code.svg?react'

interface CardProps {
  card: CardData
}

export default function Card({ card }:CardProps) {
  const {
    projectName,
    description,
    logoPathLight,
    logoPathDark,
    backgroundLight,
    backgroundDark,
    WIP,
    demoUrl,
    codeUrl,
  } = card

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // Watch for changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  const currentBackground = isDark ? backgroundDark : backgroundLight;


  return (
    <figure className="card flex flex-col mb-16" role="group" aria-labelledby={`card-title-${card.id}`}>
        <div className={`relative flex flex-col justify-center items-center py-8 sm:py-16 bg-cover bg-center rounded-xs h-60 md:h-60`}
        style={{
          backgroundImage: `url(${currentBackground})`,
        }}>

            <img src={logoPathLight} alt="Logo" className='dark:hidden text-black dark:text-white max-w-1/2 max-h-65'/>
            <img src={logoPathDark} alt="Logo" className='hidden dark:block text-black dark:text-white max-w-1/2 max-h-65'/>
            
            {WIP && (
              <div className='w-full absolute top-4 flex items-center justify-start'>              
                <div className='p-2 bg-secondary-light dark:bg-secondary-dark rounded-r-xl uppercase font-medium text-black'>Work in progress</div>
              </div>
            )}

            <div className='w-full absolute bottom-0 translate-y-1/2  px-4 flex'>
            {demoUrl && (
              
              <a href={demoUrl} aria-label={`View the live demo of ${projectName}`} target="_blank" rel="noopener noreferrer" className='mr-auto p-2 bg-accent-light dark:bg-accent-dark hover:bg-secondary-light rounded-2xl uppercase font-medium border-6 border-white dark:border-blue text-black'>Demo</a>
            
            )}
            {codeUrl && (
              
              <a href={codeUrl} aria-label='View the source code on GitHub' target="_blank" rel="noopener noreferrer" className='ml-auto p-2 bg-black dark:bg-white hover:bg-secondary-light rounded-2xl uppercase font-medium text-accent-light dark:text-accent-dark border-6 border-white dark:border-blue font-mono'><CodeSVG /></a>
            
            )}
            </div>
            
        </div>
        <div className="text pt-4">
            <h2 id={`card-title-${card.id}`} className='font-serif text-xl xxs:text-2xl my-4 uppercase'>{projectName}</h2>
            <p className='pcard xxs:text-base text-justify'>{description}</p>
        </div>

    </figure>
  );
}