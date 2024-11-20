"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { I18Context } from "@/providers/LanguageProvider";
import { useContext } from "react";

export default function LanguageToggle() {
  const context = useContext(I18Context);

  const selectedLanguage = context?.language || "es";

  const handleLanguageChange = (language: string) => {
    context?.changeLanguage(language);
  };

  return (
    <div className="sticky top-0 z-50 flex h-16 w-full items-center justify-end px-6 py-2 backdrop-blur-md">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="px-6 py-2">
            <span className="sr-only">Seleccione idioma</span>
            <span>
              {selectedLanguage === "es"
                ? "Español"
                : selectedLanguage === "ru"
                ? "Ruso"
                : selectedLanguage === "de"
                ? "Alemán"
                : "Inglés"}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => handleLanguageChange("es")}
          >
            Español
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => handleLanguageChange("ru")}
          >
            Ruso
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => handleLanguageChange("de")}
          >
            Alemán
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => handleLanguageChange("en")}
          >
            Inglés
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
