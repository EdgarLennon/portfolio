"use client";

import Image from "next/image";
import BoxReveal from "./magicui/box-reveal";
import { useContext } from "react";
import { I18Context } from "@/providers/LanguageProvider";

const enterprises = [
  {
    id: 1,
    name: "Red Nueva Conexión",
    image: "companies/rnc.svg",
    duration: "Junio 2023 - Julio 2024",
  },
  {
    id: 2,
    name: "Inigualitysoft",
    image: "companies/ini.svg",
    duration: "Agosto 2024 - Actualidad",
  },
];

export default function Experience() {
  const context = useContext(I18Context);
  return (
    <section className="w-full flex justify-center flex-col gap-4 p-2 md:w-6/12 ">
      <BoxReveal>
        <h1 className="font-semibold text-2xl text-gray-500">
          {context?.t.translate("experience.title")}
        </h1>
      </BoxReveal>
      <div className=" flex flex-col w-full justify-between ">
        <div className="flex flex-col p-2 gap-2 ">
          {enterprises.map((enterprise) => (
            <div
              key={enterprise.id}
              className="flex w-full flex-row p-2 gap-[15px] md:justify-between"
            >
              <div className="flex gap-2">
                <BoxReveal>
                  <Image
                    height={40}
                    width={40}
                    src={enterprise.image}
                    alt="enterprise"
                  />
                </BoxReveal>

                <BoxReveal>
                  <h4 className="text-gray-500">{enterprise.name}</h4>
                </BoxReveal>
              </div>
              <BoxReveal>
                <p className="text-gray-500">{enterprise.duration}</p>
              </BoxReveal>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 p-2  justify-center items-center  w-full">
        <BoxReveal>
          <p className="text-center text-xl text-gray-500">
            {context?.t.translate("experience.description")}
          </p>
        </BoxReveal>
      </div>
    </section>
  );
}
