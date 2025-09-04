import { useState, useEffect, useCallback } from 'react';
import type { TranslationStructure, SupportedLanguages, TranslationKey } from './translationTyping.ts';

import it from './italian.ts'
import en from './english.ts'

const translations: Record<SupportedLanguages, TranslationStructure> = {
  it,
  en
};

//Global state - shared across all components
let globalLanguage: SupportedLanguages = (() => {
  const saved = localStorage.getItem('preferred-language');
  return (saved === 'en' || saved === 'it') ? saved as SupportedLanguages : 'en';
})();

const listeners: Set<() => void> = new Set();

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguages>(globalLanguage);

  //Subscribe to global language changes
  useEffect(() => {
    const updateListener = () => setCurrentLanguage(globalLanguage);
    listeners.add(updateListener);
    
    return () => {
      listeners.delete(updateListener);
    };
  });

  const setLanguage = useCallback((lang: SupportedLanguages) => {
    globalLanguage = lang;
    localStorage.setItem('preferred-language', lang);
    
    //Notify all components
    listeners.forEach(listener => listener());
  }, []);

  const t = useCallback((key: TranslationKey): string => {
    const keys = key.split('.');
    let result: any = translations[currentLanguage];
    
    for (const k of keys) {
      result = result?.[k];
    }
    
    return typeof result === 'string' ? result : key;
  }, [currentLanguage]);

  return {
    currentLanguage,
    setLanguage,
    t,
  };
}