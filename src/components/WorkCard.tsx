import { useEffect, useState } from 'react';
import type { WorksData } from "../data/WorksData"
import { useLanguage } from '../translation/index'

import CodeSVG from '../assets/code.svg?react'

interface WorksProps {
  card: WorksData
}

export default function Card({ card }:WorksProps) {
  const {
    highlighted,
    imageURL,
    alt,
    tags,
    name,
    description,
    feature1,
    feature2,
    code,
    live,
    liveType
  } = card

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    //Watch for changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  const { t } = useLanguage()


  return (
    <section className={`relative h-full w-full flex flex-col items-center md:justify-center justify-center gap-12 px-4 shadow-light dark:shadow-dark ring-2 ring-inset ring-black/8 dark:ring-[#9F85D0]/10 pt-4 pb-9 rounded-xl ${isDark ? 'bg-work-card-bg-dark' : 'bg-work-card-bg'}`}>
      <img src={imageURL} alt={t(alt)} className='h-full max-h-80 rounded-lg z-10'/>

      { highlighted && (<div className='absolute top-0 left-0 w-full h-[72px] bg-main-accent dark:bg-main-accent-dark rounded-t-xl z-0'></div>)}

      <div className='flex flex-col items-center justify-center gap-11'>

        <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <div key={tag} className="px-2 py-1 bg-tags-bg dark:bg-tags-bg-dark text-tags-text dark:text-tags-text-dark text-[12px] rounded-full">{tag}</div>))
        }
        </div>
        
        <div className='flex flex-col items-start justify-center gap-9'>
          <h2 className='font-serif text-lg font-semibold'>{t(name)}</h2>
          <p className='text-justify hyphens-auto whitespace-pre-line'>{t(description)}</p>
          <p className='text-justify hyphens-auto whitespace-pre-line text-secondary-text dark:text-secondary-text-dark'>{t(feature1)}</p>
          <p className='text-justify hyphens-auto whitespace-pre-line text-secondary-text dark:text-secondary-text-dark'>{t(feature2)}</p>
        </div>

      </div>

      <div className='flex items-center justify-center gap-6 mt-auto'>
        <a href={code} aria-label={`See ${t(name)} code`} target="_blank" rel="noopener noreferrer" className='button-secondary shadow-secondary-button dark:shadow-secondary-button-dark'><CodeSVG /> Code</a>
        { live && (
          <a href={live} aria-label='Open Live or Demo' target="_blank" rel="noopener noreferrer" className='button-primary shadow-primary-button dark:shadow-primary-button-dark'>{liveType}</a>
        )}
      </div>
      

    </section>
  );
}