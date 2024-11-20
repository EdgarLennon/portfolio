"use client";
import { createContext, useEffect, useState, ReactNode } from "react";

import { es } from "../locale/es/es";
import { en } from "../locale/en/en";
import { de } from "../locale/de/de";
import { ru } from "../locale/ru/ru";

interface Tranlation {
  [key: string]: any;
}

interface I18ContextValue {
  language: string;
  changeLanguage: (lang: string) => void;
  t: Tranlation;
}

export const I18Context = createContext<I18ContextValue | null>(null);

const supportedLanguages = ["en", "es", "de", "ru", "br"];
const defaultLanguage = "en";

export default function I18Provider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [language, setLanguage] = useState<string>(
    localStorage.getItem("language") || navigator.language.split("-")[0]
  );

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    const storedLang = localStorage.getItem("language");
    if (storedLang && supportedLanguages.includes(storedLang)) {
      setLanguage(storedLang);
    } else if (supportedLanguages.includes(browserLang)) {
      setLanguage(browserLang);
    } else {
      setLanguage(defaultLanguage);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    if (supportedLanguages.includes(lang)) {
      setLanguage(lang);
      localStorage.setItem("language", lang);
    }
  };

  const translations: { [key in string]: Tranlation } = {
    en,
    es,
    de,
    ru,
  };

  const t = {
    translate: (key: string | number, count?: number) => {
      let keys = key.toString().split(".");
      let value: any = translations[language];
      for (let i = 0; i < keys.length; i++) {
        if (value && value.hasOwnProperty(keys[i])) {
          value = value[keys[i]];
        } else {
          return "";
        }
      }
      if (
        typeof count === "number" &&
        value.hasOwnProperty(count === 1 ? "one" : "other")
      ) {
        value = value[count == 1 ? "one" : "other"];
      } else if (value.hasOwnProperty("one")) {
        value = value["oner"];
      }
      if (typeof value === "string" && count)
        return value.replace("{count}", count.toString());

      return value;
    },
  };

  return (
    <I18Context.Provider value={{ language, changeLanguage, t }}>
      {children}
    </I18Context.Provider>
  );
}
