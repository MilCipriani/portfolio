import Logo from '../assets/Logo.svg?react'

export default function Card() {

  return (
    <div className="card flex flex-col mb-16">
        <div className="relative flex flex-col justify-center items-center py-8 sm:py-16 bg-transparent-black dark:bg-transparent-white rounded-xs">
            <Logo className='max-w-1/2 max-h-9/10'/>
            <div className='w-full absolute top-4 flex items-center justify-start'>
              <button className='p-2 bg-secondary-light dark:bg-secondary-dark rounded-r-xl uppercase font-medium'>Work in progress</button>
            </div>
            <div className='w-full absolute bottom-0 translate-y-1/2  px-4 flex items-center justify-between'>
              <button className='p-2 bg-accent-light dark:bg-accent-dark rounded-2xl uppercase font-medium border-6 border-white dark:border-blue text-black'>Demo</button>
              <button className='p-2 bg-black dark:bg-white rounded-2xl uppercase font-medium text-accent-light dark:text-accent-dark border-6 border-white dark:border-blue'>&lt;&gt;</button>
            </div>
        </div>
        <div className="text pt-4">
            <h2 className='font-serif text-xl xxs:text-2xl mt-4 uppercase'>Project Name</h2>
            <p className='pcard xxs:text-base'>Project description with some details and stack</p>
        </div>

    </div>
  );
}