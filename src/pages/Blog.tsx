import ThemeToggle from '../components/ThemeToggle';

export default function Contacts() {

  return (
    <main className='h-full flex flex-col justify-between pt-8 pb-16 xxs:py-16 relative'>
			<h1 className="font-serif uppercase text-3xl xxs:text-4xl md:text-6xl lg:text-7xl">Coming soon ...</h1>
      
      <footer className='hidden md:flex justify-end items-center gap-4'>
        <button disabled type="button" aria-disabled="true" aria-label='Change language - in development' className='bg-transparent uppercase'>EN</button>
        <ThemeToggle /> 
      </footer> 
    </main>
    
  );
}