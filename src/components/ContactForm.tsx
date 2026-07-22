import { useState, useEffect } from 'react';
import { useLanguage } from '../translation/index'

import Whatsapp from '../assets/Contacts/Whatsapp.svg?react'
import Linkedin from '../assets/Contacts/Linkedin.svg?react'
import Github from '../assets/Contacts/Github.svg?react'

export default function ContactForm() {
  const [result, setResult] = useState("");
  const { t } = useLanguage();
  const [whatsappLink, setWhatsappLink] = useState('')

  //This picks how to open whatsapp depending on the device
  useEffect(() => {
    const isMobile = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      setWhatsappLink("whatsapp://send?phone=393492996483");//Mobile app
    } else {
      setWhatsappLink("https://web.whatsapp.com/send?phone=393492996483");//WhatsappWeb
    }
  }, []);//Runs once at mount

  const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
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
      setResult(t("routes.contacts.section1.form.formAnswer"));
      form.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form onSubmit={onSubmit} className='bg-linear-180 from-[#FFD6E8] to-[#FFA879] dark:from-[#786889] dark:to-[#161A28] shadow-light dark:shadow-dark ring-2 ring-inset ring-black/5 dark:ring-[#9F85D0]/10 rounded-xl flex flex-col justify-center items-center w-full max-w-184 gap-8 p-8'>
      <p className='text-center sm:text-base font-semibold'>{t('routes.contacts.section1.availability')}</p>
      <input type="hidden" name="from_name" value="Personal Portfolio"></input>
      <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}}></input>
      <input type="text" placeholder={t('routes.contacts.section1.form.name')} name="name" required className='p-2 rounded-full font-medium w-full'/>
      <input type="email" placeholder='Email' name="email" required className='p-2 rounded-full font-medium w-full'/>
      <input type="text" placeholder={t('routes.contacts.section1.form.object')} name="object" required className='p-2 rounded-full font-medium w-full'/>
      <textarea name="message" placeholder={t('routes.contacts.section1.form.message')} required className='p-2 rounded-2xl font-medium w-full'></textarea>
      <span className='font-semibold py-2 px-3 text-black'>{result}</span>
      <button type="submit" className='button-primary shadow-home-button-light dark:shadow-primary-button-dark'>{t('routes.contacts.section1.form.submitForm')}</button>

        <hr className='w-full text-secondary-text/50 dark:text-secondary-text-dark'></hr>
        <div className='w-full flex items-center justify-center gap-6'>
          <a href={whatsappLink} aria-label={t('routes.contacts.aria.whatsapp')} target="_blank" rel="noopener noreferrer">
            <Whatsapp aria-hidden="true" className='md:w-14 md:h-14 xxs:w-12 xxs:h-12 hover:text-accent-light dark:hover:text-accent-dark active:text-secondary-light'/>
          </a>
          <a href='https://www.linkedin.com/in/milena-cipriani' aria-label={t('routes.contacts.aria.linkedin')} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" className='w-14 h-14 xxs:w-12 xxs:h-12 hover:text-accent-light dark:hover:text-accent-dark active:text-secondary-light'/></a>
          <a href='https://github.com/MilCipriani' aria-label={t('routes.contacts.aria.github')} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" className='w-14 h-14 xxs:w-12 xxs:h-12 hover:text-accent-light dark:hover:text-accent-dark active:text-secondary-light'/></a>
        </div>
    </form>
  );
}
