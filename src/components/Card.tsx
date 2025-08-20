import Logo from '../assets/Logo.svg?react'

export default function Card() {

  return (
    <div className="card flex flex-col mb-16">
        <div className="flex justify-center items-center py-4 sm:py-8 bg-transparent-black dark:bg-transparent-white rounded-xs">
            <Logo className='max-w-1/2 max-h-9/10'/>
        </div>
        <div className="text">
            <h2 className='font-serif text-xl mt-4'>Project Name</h2>
            <p>Project description with some details and stack</p>
        </div>

    </div>
  );
}