import { useState } from 'react';
import { useLanguage } from '../translation/index'

export default function ContactForm() {
  const [result, setResult] = useState("");
  const { t } = useLanguage();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "9d7a1bbe-f85c-4fac-b633-5e018aea304d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult(t("routes.contacts.formAnswer"));
      form.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form onSubmit={onSubmit} className='bg-[url(/src/assets/BGL.webp)] bg-cover bg-center flex flex-col justify-center items-center md:max-w-1/2 gap-8 p-8 pt-16 rounded-xs z-50'>
      <p className='text-center sm:text-base font-semibold'>{t('routes.contacts.availability')}</p>
      <input type="hidden" name="from_name" value="Personal Portfolio"></input>
      <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}}></input>
      <input type="text" placeholder={t('routes.contacts.name')} name="name" required className='p-2 bg-white dark:bg-secondary-light rounded-xl font-medium text-black w-full'/>
      <input type="email" placeholder='Email' name="email" required className='p-2 bg-white dark:bg-secondary-light rounded-xl font-medium text-black w-full'/>
      <input type="text" placeholder={t('routes.contacts.object')} name="object" required className='p-2 bg-white dark:bg-secondary-light rounded-xl font-medium text-black w-full'/>
      <textarea name="message" placeholder={t('routes.contacts.message')} required className='p-2 bg-white dark:bg-secondary-light rounded-xl font-medium text-black w-full'></textarea>
      <button type="submit" className='button-primary flex items-center w-fit bg-black dark:bg-white text-accent-light dark:text-accent-dark p-4 rounded-2xl cursor-pointer uppercase font-normal'>{t('routes.contacts.submitForm')}</button>
      <span className='rounded-xl font-semibold py-2 px-3 text-black'>{result}</span>
    </form>
  );
}
