"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, type Translations } from '@/lib/translations';

type Locale = 'fr' | 'ar';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof Translations) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>('fr'); // Default to French

  useEffect(() => {
    // Set initial locale from localStorage or browser preference
    const storedLocale = localStorage.getItem('locale') as Locale;
    if (storedLocale && (storedLocale === 'fr' || storedLocale === 'ar')) {
      setLocaleState(storedLocale);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'ar') {
        setLocaleState('ar');
      } else {
        setLocaleState('fr');
      }
    }
  }, []);

  useEffect(() => {
    // Update localStorage and HTML dir attribute when locale changes
    localStorage.setItem('locale', locale);
    document.documentElement.setAttribute('lang', locale);
    document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const t = (key: keyof Translations) => {
    return translations[key]?.[locale] || key; // Fallback to key if translation not found
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
