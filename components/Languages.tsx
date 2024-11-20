"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Marquee from "./magicui/marquee";
import BoxReveal from "./magicui/box-reveal";
import { I18Context } from "@/providers/LanguageProvider";
import { useContext } from "react";

const upImages = [
  "css.svg",
  "nestjs.svg",
  "nextjs.svg",
  "nodejs.svg",
  "postgresql.svg",
  "react.svg",
  "figma.svg",
  "html.svg",
];

const firstRow = upImages.slice(0, upImages.length / 2);
const secondRow = upImages.slice(upImages.length / 2);

const ImageCard = ({ image, alt }: { image: string; alt: string }) => {
  return (
    <figure
      className={cn(
        "relative w-max cursor-pointer overflow-hidden rounded-xl border p-4"
      )}
    >
      <div className="relative w-24 h-24">
        <Image src={image} fill alt={alt || "Image"} />
      </div>
    </figure>
  );
};

export default function Languages() {
  const context = useContext(I18Context);
  return (
    <div className="w-full md:w-6/12">
      <h1 className="font-semibold text-2xl text-gray-500">
        {context?.t.translate("skills")}
      </h1>
      <Marquee pauseOnHover>
        {firstRow.map((f, i) => (
          <BoxReveal key={`first-${i}`}>
            <ImageCard image={f} alt={`Image ${i}`} />
          </BoxReveal>
        ))}
      </Marquee>
      <Marquee pauseOnHover reverse>
        {secondRow.map((s, i) => (
          <BoxReveal key={`second-${i}`}>
            <ImageCard image={s} alt={`Image ${i + firstRow.length}`} />
          </BoxReveal>
        ))}
      </Marquee>
    </div>
  );
}
