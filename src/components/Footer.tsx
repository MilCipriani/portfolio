import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

export default function Footer() {
  return (
    <div className="w-full flex items-center mt-auto">
      <p className='mr-auto text-sm text-copyright dark:text-copyright-dark'>© Milena Cipriani</p>
      <LanguageToggle />
      <ThemeToggle />
    </div>

  );
}