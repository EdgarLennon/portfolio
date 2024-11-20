"use client";
import { createContext, useEffect, useState, ReactNode } from "react";

import { es } from "../locale/es/es";
import { en } from "../locale/en/en";
import { de } from "../locale/de/de";
import { ru } from "../locale/ru/ru";

interface Translation {
  [key: string]: any;
}

interface I18ContextValue {
  language: string;
  changeLanguage: (lang: string) => void;
  t: Translation;
}

export const I18Context = createContext<I18ContextValue | null>(null);

const supportedLanguages = ["en", "es", "de", "ru", "br"];
const defaultLanguage = "en";

export default function I18Provider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [language, setLanguage] = useState<string>("");

  // Usamos useEffect para cargar la configuración del idioma al montar el componente
  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    const browserLang = navigator.language.split("-")[0];

    if (storedLang && supportedLanguages.includes(storedLang)) {
      setLanguage(storedLang); // Si existe en localStorage, lo usamos
    } else if (supportedLanguages.includes(browserLang)) {
      setLanguage(browserLang); // Si el idioma del navegador es soportado, lo usamos
    } else {
      setLanguage(defaultLanguage); // Si no hay ninguno de los anteriores, usamos el idioma por defecto
    }
  }, []);

  // Función para cambiar el idioma
  const changeLanguage = (lang: string) => {
    if (supportedLanguages.includes(lang)) {
      setLanguage(lang);
      localStorage.setItem("language", lang); // Guardamos el idioma en localStorage
    }
  };

  // Definimos las traducciones por idioma
  const translations: { [key in string]: Translation } = {
    en,
    es,
    de,
    ru,
  };

  // Función para traducir las claves de texto
  const t = {
    translate: (key: string | number, count?: number) => {
      let keys = key.toString().split(".");
      let value: any = translations[language];

      // Accedemos al valor de la traducción
      for (let i = 0; i < keys.length; i++) {
        if (value && value.hasOwnProperty(keys[i])) {
          value = value[keys[i]];
        } else {
          return ""; // Si no se encuentra la clave, devolvemos una cadena vacía
        }
      }

      // Si tenemos una cuenta, manejamos las traducciones plurales
      if (
        typeof count === "number" &&
        value.hasOwnProperty(count === 1 ? "one" : "other")
      ) {
        value = value[count === 1 ? "one" : "other"];
      } else if (value.hasOwnProperty("one")) {
        value = value["one"]; // Valor por defecto si "one" está presente
      }

      // Si el valor es una cadena y tiene un marcador de cuenta, lo reemplazamos
      if (typeof value === "string" && count) {
        return value.replace("{count}", count.toString());
      }

      return value;
    },
  };

  return (
    <I18Context.Provider value={{ language, changeLanguage, t }}>
      {children}
    </I18Context.Provider>
  );
}
