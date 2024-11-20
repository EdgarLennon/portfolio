"use client";

import { useContext } from "react";
import BoxReveal from "./magicui/box-reveal";
import { I18Context } from "@/providers/LanguageProvider";

export default function About() {
  const context = useContext(I18Context);
  return (
    <div className="flex flex-col gap-2 w-full md:w-6/12 p-2 leading-8 ">
      <BoxReveal>
        <h1 className="font-semibold text-2xl text-gray-500">
          {context?.t.translate("about.title")}
        </h1>
      </BoxReveal>
      <BoxReveal>
        <p className="text-gray-500">
          {context?.t.translate("about.description")}
        </p>
      </BoxReveal>
    </div>
  );
}
