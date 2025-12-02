import type { SupportedLanguages } from '../translation/translationTyping.ts';
import { useLanguage } from '../translation/index';


export default function LanguageToggle() {

  const { currentLanguage, setLanguage } = useLanguage();

	const toggleLanguage = (): void => {
		const newLanguage: SupportedLanguages = currentLanguage === 'en' ? 'it' : 'en';
		setLanguage(newLanguage);
		console.log('new lang is set to: ', newLanguage);
	};

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="transition-colors px-4 cursor-pointer"
      title={`Switch to ${currentLanguage === 'en' ? 'Italian' : 'English'}`}
      aria-label={`Switch to ${currentLanguage === 'en' ? 'Italian' : 'English'} - Traduci in ${currentLanguage === 'en' ? 'Italiano' : 'Inglese'}`}>
      <span className="">
        {currentLanguage === 'en' ? "IT" : "EN"}
      </span>
      
    </button>
  )
}