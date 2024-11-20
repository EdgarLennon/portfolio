"use client";

import Image from "next/image";
import ShinyButton from "./ui/shiny-button";
import Link from "next/link";
import BoxReveal from "./magicui/box-reveal";
import { useContext } from "react";
import { I18Context } from "@/providers/LanguageProvider";

export default function Hero() {
  const context = useContext(I18Context);
  return (
    <div className="flex flex-col md:flex-row gap-5 w-full md:w-6/12 h-auto items-center p-5 ">
      {/* Left - Top */}
      <div className="w-4/12 flex justify-center ">
        <BoxReveal>
          <Image
            className="rounded-full"
            width={150}
            height={150}
            src="/profile_photo.webp"
            alt="Ken"
          />
        </BoxReveal>
      </div>
      {/* Right - Bottom */}
      <div className="flex flex-col gap-5 p-2 w-full ">
        <div className="flex flex-col gap-5 leading-8">
          <BoxReveal>
            <h1 className="text-center h-[50px] text-[40px] font-bold text-gray-500">
              {context?.t.translate("title")}
            </h1>
          </BoxReveal>
          <BoxReveal>
            <p className="text-gray-500">
              {context?.t.translate("subtitle")}
            </p>
          </BoxReveal>
        </div>
        <div className="flex justify-center gap-4">
          <BoxReveal>
            <Link href="/pdf/CURRICULUM_AGUIRRE-KEN.pdf" target="_blank">
              <ShinyButton className="text-gray-500 font-bold">
                CV Español
              </ShinyButton>
            </Link>
          </BoxReveal>
          <BoxReveal>
            <Link href="/pdf/CV_KEN_AGUIRRE_ROSADO_ENGLISH.pdf" target="_blank">
              <ShinyButton className="text-gray-500 font-bold">
                CV Inglés
              </ShinyButton>
            </Link>
          </BoxReveal>
        </div>
      </div>
    </div>
  );
}
