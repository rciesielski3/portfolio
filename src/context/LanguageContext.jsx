import React from "react";

import {
  defaultLanguage,
  portfolioContent,
  supportedLanguages,
} from "../content/portfolioContent";

const STORAGE_KEY = "portfolio-language";

const LanguageContext = React.createContext(null);

const getBrowserLanguage = () => {
  if (typeof navigator === "undefined") {
    return defaultLanguage;
  }

  return navigator.language?.slice(0, 2).toLowerCase();
};

const getInitialLanguage = () => {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
  if (supportedLanguages.includes(storedLanguage)) {
    return storedLanguage;
  }

  const browserLanguage = getBrowserLanguage();
  return supportedLanguages.includes(browserLanguage)
    ? browserLanguage
    : defaultLanguage;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = React.useState(getInitialLanguage);

  const setLanguage = React.useCallback((nextLanguage) => {
    if (!supportedLanguages.includes(nextLanguage)) {
      return;
    }

    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  }, []);

  const toggleLanguage = React.useCallback(() => {
    const currentIndex = supportedLanguages.indexOf(language);
    const nextIndex = (currentIndex + 1) % supportedLanguages.length;
    setLanguage(supportedLanguages[nextIndex]);
  }, [language, setLanguage]);

  React.useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = React.useMemo(
    () => ({
      content: portfolioContent[language],
      language,
      setLanguage,
      supportedLanguages,
      toggleLanguage,
    }),
    [language, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
};
